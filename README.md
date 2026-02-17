# 🚀 IdeaSpark - AWS Deployment

A beautiful idea tracking app deployed on AWS Amplify with DynamoDB backend.

## Quick Start

### Prerequisites
- Node.js 18+ ([download](https://nodejs.org/))
- Terraform ([download](https://www.terraform.io/downloads))
- AWS CLI ([download](https://aws.amazon.com/cli/))
- AWS Account with credentials

### Deploy in 3 Steps

#### 1. Prepare
```bash
# Windows
prepare.bat

# Mac/Linux
chmod +x prepare.sh deploy.sh
./prepare.sh
```

#### 2. Configure AWS
```bash
aws configure
# Enter your AWS Access Key, Secret Key, and region (us-east-1)
```

#### 3. Deploy
```bash
terraform init
terraform apply
# Type 'yes' to confirm

# Then deploy the app
deploy.bat    # Windows
./deploy.sh   # Mac/Linux
```

## What Gets Deployed

The `main.tf` Terraform file creates:
- ✅ DynamoDB tables (ideas & groups)
- ✅ AWS Amplify app
- ✅ IAM user with credentials
- ✅ React frontend

## Files Overview

### Core Files
- `main.tf` - Terraform infrastructure
- `idea_tracker_aws.jsx` - AWS version of app
- `idea_tracker.jsx` - Original Firebase version (reference)
- `prepare.sh/bat` - Setup scripts
- `deploy.sh/bat` - Deployment scripts

### Documentation
- `SIMPLE_DEPLOY.md` - Beginner-friendly guide
- `AWS_DEPLOY.md` - Detailed AWS guide
- `MIGRATION.md` - Firebase to DynamoDB migration

### Migration Tools
- `migrate_firebase_to_dynamodb.py` - Migration script
- `requirements-migration.txt` - Python dependencies

## Cost Estimate

- DynamoDB: ~$1-2/month
- Amplify: ~$0.01/build + $0.15/GB
- **Total: ~$2-5/month**

## Troubleshooting

### "Terraform not found"
Install from https://www.terraform.io/downloads

### "AWS credentials not configured"
Run: `aws configure`

### "Build failed"
Run: `npm install` then try again

## Making Updates

After code changes:
```bash
deploy.bat    # Windows
./deploy.sh   # Mac/Linux
```

## Cleanup

To remove everything:
```bash
terraform destroy
```

---

Made with ❤️ for tracking brilliant ideas!
