#!/usr/bin/env python3
"""
Firebase to DynamoDB Migration Script
Migrates IdeaSpark data from Firestore to DynamoDB
"""

import json
import sys
from datetime import datetime
import firebase_admin
from firebase_admin import credentials, firestore
import boto3
from botocore.exceptions import ClientError

# Configuration
FIREBASE_CREDS_PATH = "firebase-service-account.json"
APP_ID = "idea-tracker-v1"
AWS_REGION = "us-east-1"

# DynamoDB Table Names
USERS_TABLE = "ideaspark-users"
IDEAS_TABLE = "ideaspark-ideas"
GROUPS_TABLE = "ideaspark-groups"

def init_firebase():
    """Initialize Firebase Admin SDK"""
    cred = credentials.Certificate(FIREBASE_CREDS_PATH)
    firebase_admin.initialize_app(cred)
    return firestore.client()

def init_dynamodb():
    """Initialize DynamoDB client"""
    return boto3.resource('dynamodb', region_name=AWS_REGION)

def convert_timestamp(ts):
    """Convert Firestore timestamp to ISO string"""
    if ts:
        return ts.isoformat() if isinstance(ts, datetime) else str(ts)
    return None

def migrate_user_ideas(db, dynamodb, user_id):
    """Migrate ideas for a specific user"""
    ideas_ref = db.collection('artifacts').document(APP_ID).collection('users').document(user_id).collection('ideas')
    ideas = ideas_ref.stream()
    
    table = dynamodb.Table(IDEAS_TABLE)
    count = 0
    
    for idea in ideas:
        data = idea.to_dict()
        item = {
            'PK': f'USER#{user_id}',
            'SK': f'IDEA#{idea.id}',
            'id': idea.id,
            'userId': user_id,
            'title': data.get('title', ''),
            'description': data.get('description', ''),
            'status': data.get('status', 'brainstorm'),
            'priority': data.get('priority', 'medium'),
            'effort': data.get('effort', 'M'),
            'tasks': json.dumps(data.get('tasks', [])),
            'createdBy': data.get('createdBy', user_id),
            'creatorName': data.get('creatorName', ''),
            'createdAt': convert_timestamp(data.get('createdAt')),
            'updatedAt': convert_timestamp(data.get('updatedAt')),
        }
        
        table.put_item(Item=item)
        count += 1
    
    return count

def migrate_groups(db, dynamodb):
    """Migrate group data"""
    groups_ref = db.collection('artifacts').document(APP_ID).collection('public').document('data').collection('groups')
    groups = groups_ref.stream()
    
    table = dynamodb.Table(GROUPS_TABLE)
    count = 0
    
    for group in groups:
        data = group.to_dict()
        item = {
            'PK': f'GROUP#{group.id}',
            'SK': 'METADATA',
            'id': group.id,
            'name': data.get('name', ''),
            'members': json.dumps(data.get('members', [])),
            'roles': json.dumps(data.get('roles', {})),
            'createdAt': convert_timestamp(data.get('createdAt')),
        }
        
        table.put_item(Item=item)
        count += 1
    
    return count

def migrate_group_ideas(db, dynamodb, group_id):
    """Migrate ideas for a specific group"""
    ideas_ref = db.collection('artifacts').document(APP_ID).collection('public').document('data').collection(f'group_ideas_{group_id}')
    ideas = ideas_ref.stream()
    
    table = dynamodb.Table(IDEAS_TABLE)
    count = 0
    
    for idea in ideas:
        data = idea.to_dict()
        item = {
            'PK': f'GROUP#{group_id}',
            'SK': f'IDEA#{idea.id}',
            'id': idea.id,
            'groupId': group_id,
            'title': data.get('title', ''),
            'description': data.get('description', ''),
            'status': data.get('status', 'brainstorm'),
            'priority': data.get('priority', 'medium'),
            'effort': data.get('effort', 'M'),
            'tasks': json.dumps(data.get('tasks', [])),
            'createdBy': data.get('createdBy', ''),
            'creatorName': data.get('creatorName', ''),
            'createdAt': convert_timestamp(data.get('createdAt')),
            'updatedAt': convert_timestamp(data.get('updatedAt')),
        }
        
        table.put_item(Item=item)
        count += 1
    
    return count

def get_all_users(db):
    """Get all user IDs from Firestore"""
    users_ref = db.collection('artifacts').document(APP_ID).collection('users')
    return [doc.id for doc in users_ref.stream()]

def get_all_groups(db):
    """Get all group IDs from Firestore"""
    groups_ref = db.collection('artifacts').document(APP_ID).collection('public').document('data').collection('groups')
    return [doc.id for doc in groups_ref.stream()]

def main():
    print("🚀 Starting Firebase to DynamoDB migration...")
    
    try:
        # Initialize connections
        print("📡 Connecting to Firebase...")
        db = init_firebase()
        
        print("📡 Connecting to DynamoDB...")
        dynamodb = init_dynamodb()
        
        # Migrate groups
        print("\n📦 Migrating groups...")
        groups_count = migrate_groups(db, dynamodb)
        print(f"✅ Migrated {groups_count} groups")
        
        # Get all group IDs for group ideas migration
        group_ids = get_all_groups(db)
        
        # Migrate group ideas
        print("\n💡 Migrating group ideas...")
        total_group_ideas = 0
        for group_id in group_ids:
            count = migrate_group_ideas(db, dynamodb, group_id)
            total_group_ideas += count
            print(f"  ✅ Group {group_id}: {count} ideas")
        print(f"✅ Total group ideas migrated: {total_group_ideas}")
        
        # Get all user IDs
        user_ids = get_all_users(db)
        print(f"\n👥 Found {len(user_ids)} users")
        
        # Migrate user ideas
        print("\n💡 Migrating user ideas...")
        total_user_ideas = 0
        for user_id in user_ids:
            count = migrate_user_ideas(db, dynamodb, user_id)
            total_user_ideas += count
            if count > 0:
                print(f"  ✅ User {user_id}: {count} ideas")
        print(f"✅ Total user ideas migrated: {total_user_ideas}")
        
        # Summary
        print("\n" + "="*50)
        print("✨ Migration Complete!")
        print(f"   Groups: {groups_count}")
        print(f"   Group Ideas: {total_group_ideas}")
        print(f"   User Ideas: {total_user_ideas}")
        print(f"   Total Items: {groups_count + total_group_ideas + total_user_ideas}")
        print("="*50)
        
    except Exception as e:
        print(f"❌ Error: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    main()
