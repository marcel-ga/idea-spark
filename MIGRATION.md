# Firebase to DynamoDB Migration Guide

This guide walks you through migrating IdeaSpark data from Firebase Firestore to AWS DynamoDB.

## Prerequisites

- Python 3.8+
- AWS CLI configured with credentials
- Firebase service account key
- Terraform installed

## Step 1: Get Firebase Service Account Key

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Go to **Project Settings** → **Service Accounts**
4. Click **Generate New Private Key**
5. Save as `firebase-service-account.json` in the `idea-spark` directory

## Step 2: Create DynamoDB Tables

```bash
cd idea-spark

# Deploy DynamoDB tables
terraform init
terraform apply -target=aws_dynamodb_table.ideas -target=aws_dynamodb_table.groups
```

This creates:
- `ideaspark-ideas` - Stores all ideas (user and group)
- `ideaspark-groups` - Stores group metadata

## Step 3: Install Python Dependencies

```bash
pip install -r requirements-migration.txt
```

## Step 4: Configure AWS Credentials

```bash
# If not already configured
aws configure

# Or set environment variables
export AWS_ACCESS_KEY_ID=your_access_key
export AWS_SECRET_ACCESS_KEY=your_secret_key
export AWS_DEFAULT_REGION=us-east-1
```

## Step 5: Run Migration

```bash
python migrate_firebase_to_dynamodb.py
```

The script will:
1. Connect to Firebase and DynamoDB
2. Migrate all groups
3. Migrate all group ideas
4. Migrate all user ideas
5. Display a summary

## Data Structure

### DynamoDB Schema

**Ideas Table:**
```
PK: USER#{userId} or GROUP#{groupId}
SK: IDEA#{ideaId}
Attributes: id, title, description, status, priority, effort, tasks, createdBy, createdAt, updatedAt
```

**Groups Table:**
```
PK: GROUP#{groupId}
SK: METADATA
Attributes: id, name, members, roles, createdAt
```

## Step 6: Verify Migration

```bash
# Check item counts
aws dynamodb scan --table-name ideaspark-ideas --select COUNT
aws dynamodb scan --table-name ideaspark-groups --select COUNT

# View sample data
aws dynamodb scan --table-name ideaspark-ideas --max-items 5
```

## Rollback

If you need to start over:

```bash
# Delete all items (WARNING: This deletes all data!)
terraform destroy -target=aws_dynamodb_table.ideas -target=aws_dynamodb_table.groups

# Recreate tables
terraform apply -target=aws_dynamodb_table.ideas -target=aws_dynamodb_table.groups
```

## Troubleshooting

### Error: "Could not automatically determine credentials"
- Run `aws configure` to set up AWS credentials
- Or set `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` environment variables

### Error: "Failed to initialize Firebase"
- Ensure `firebase-service-account.json` exists in the current directory
- Verify the JSON file is valid

### Error: "ResourceNotFoundException"
- Run `terraform apply` to create DynamoDB tables first

## Cost Estimation

DynamoDB uses on-demand pricing:
- **Write**: $1.25 per million write requests
- **Read**: $0.25 per million read requests
- **Storage**: $0.25 per GB-month

For a typical migration of 10,000 items:
- One-time migration cost: ~$0.01
- Monthly storage (1 MB): ~$0.0003

## Next Steps

After successful migration:
1. Update your application to use DynamoDB instead of Firestore
2. Test thoroughly in a staging environment
3. Keep Firebase as backup until confident in DynamoDB setup
4. Update security rules and access patterns
