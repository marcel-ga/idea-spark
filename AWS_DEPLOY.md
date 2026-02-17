# IdeaSpark AWS Deployment Guide

This guide shows how to deploy IdeaSpark using AWS services (DynamoDB + S3/CloudFront).

## Architecture

- **DynamoDB**: Data storage (ideas, groups)
- **S3 + CloudFront**: Static hosting
- **Local Storage**: Anonymous user sessions (no Cognito needed for MVP)

## Step 1: Deploy DynamoDB Tables

```bash
cd idea-spark

# Deploy DynamoDB tables with Terraform (main.tf)
terraform init
terraform apply
```

## Step 2: Create IAM User for Frontend

```bash
# Create IAM user with DynamoDB access
aws iam create-user --user-name ideaspark-frontend

# Attach policy for DynamoDB access
aws iam attach-user-policy \
  --user-name ideaspark-frontend \
  --policy-arn arn:aws:iam::aws:policy/AmazonDynamoDBFullAccess

# Create access keys
aws iam create-access-key --user-name ideaspark-frontend
```

Save the `AccessKeyId` and `SecretAccessKey` from the output.

## Step 3: Configure the App

Update `idea_tracker_aws.jsx`:

```javascript
const AWS_CONFIG = {
  region: 'us-east-1',  // Your AWS region
  credentials: {
    accessKeyId: 'YOUR_ACCESS_KEY_ID',      // From Step 2
    secretAccessKey: 'YOUR_SECRET_ACCESS_KEY'  // From Step 2
  }
};
```

## Step 4: Install Dependencies

```bash
npm install
```

## Step 5: Build the App

```bash
npm run build
```

## Step 6: Deploy to S3

### Option A: Using AWS CLI

```bash
# Create S3 bucket
aws s3 mb s3://ideaspark-app

# Enable static website hosting
aws s3 website s3://ideaspark-app \
  --index-document index.html \
  --error-document index.html

# Upload build files
aws s3 sync dist/ s3://ideaspark-app --acl public-read

# Get website URL
echo "http://ideaspark-app.s3-website-us-east-1.amazonaws.com"
```

### Option B: Using Terraform

The `main.tf` file already includes S3 bucket configuration.

```bash
terraform apply
npm run build
aws s3 sync dist/ s3://$(terraform output -raw bucket_name)
```

## Step 7: (Optional) Add CloudFront CDN

```bash
# Create CloudFront distribution
aws cloudfront create-distribution \
  --origin-domain-name ideaspark-app.s3-website-us-east-1.amazonaws.com \
  --default-root-object index.html
```

## Security Improvements

### Use Cognito for Real Authentication

1. Create Cognito User Pool
2. Enable anonymous access via Identity Pool
3. Use temporary credentials instead of hardcoded keys

### Use API Gateway + Lambda

Instead of direct DynamoDB access from frontend:

```
Frontend → API Gateway → Lambda → DynamoDB
```

This keeps credentials secure on the backend.

## Cost Estimation

**Monthly costs for ~1000 users:**
- DynamoDB: $1-5 (on-demand pricing)
- S3: $0.50 (storage + requests)
- CloudFront: $1-2 (data transfer)
- **Total: ~$3-8/month**

## Differences from Firebase Version

| Feature | Firebase | AWS |
|---------|----------|-----|
| Auth | Anonymous Auth | LocalStorage (MVP) |
| Database | Firestore | DynamoDB |
| Hosting | Firebase Hosting | S3 + CloudFront |
| Real-time | Yes (onSnapshot) | No (polling needed) |
| Setup | Easier | More control |

## Adding Real-time Updates

For real-time sync like Firebase, add:
- **AWS AppSync** (GraphQL with subscriptions)
- **DynamoDB Streams** + WebSockets
- **Polling** (simple, check every 30s)

## Troubleshooting

### CORS Errors
Add CORS policy to S3 bucket:

```json
[
  {
    "AllowedHeaders": ["*"],
    "AllowedMethods": ["GET", "PUT", "POST", "DELETE"],
    "AllowedOrigins": ["*"],
    "ExposeHeaders": []
  }
]
```

### Access Denied
- Check IAM user has DynamoDB permissions
- Verify access keys are correct
- Check table names match

### Items Not Showing
- Check AWS region matches
- Verify table names in code
- Check browser console for errors

## Next Steps

1. Add Cognito authentication
2. Implement API Gateway + Lambda
3. Add real-time updates with AppSync
4. Set up CI/CD with GitHub Actions
5. Add monitoring with CloudWatch
