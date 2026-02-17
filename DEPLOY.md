# Firebase IdeaSpark Deployment Guide

## Prerequisites
- Google Cloud account
- Terraform installed
- Firebase CLI installed: `npm install -g firebase-tools`

## Step 1: Deploy Infrastructure with Terraform

```bash
cd idea-spark

# Initialize Terraform
terraform init

# Create terraform.tfvars file
cat > terraform.tfvars <<EOF
project_id         = "your-gcp-project-id"
custom_domain_name = "ideas.yourdomain.com"
EOF

# Deploy
terraform apply
```

## Step 2: Get Firebase Config

```bash
# Get the Firebase configuration (marked as sensitive)
terraform output -json firebase_config

# Copy the output to your idea_tracker.jsx firebaseConfig object
```

## Step 3: Deploy Firestore Rules

```bash
# Login to Firebase
firebase login

# Initialize Firebase in this directory
firebase init firestore

# Select your project
# Use existing firestore.rules file

# Deploy rules
firebase deploy --only firestore:rules
```

## Step 4: Enable Anonymous Authentication

In Firebase Console:
1. Go to Authentication → Sign-in method
2. Enable "Anonymous" provider
3. Save

## Step 5: Update Your React App

Replace the `firebaseConfig` in `idea_tracker.jsx` with values from Step 2.

## Step 6: Deploy to Firebase Hosting (Optional)

```bash
# Build your React app
npm run build

# Deploy to hosting
firebase deploy --only hosting
```

## Outputs

After `terraform apply`, you'll get:
- `hosting_url`: Your Firebase Hosting URL
- `firebase_config`: Configuration for your React app (use `terraform output -json firebase_config`)

## Clean Up

```bash
terraform destroy
```
