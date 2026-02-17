# 🚀 IdeaSpark - Simple Deployment Guide

Hi! This guide will help you deploy IdeaSpark to AWS in 3 easy steps.

## Prerequisites

You need these installed on your computer:
- ✅ Node.js (download from https://nodejs.org/)
- ✅ Terraform (download from https://www.terraform.io/downloads)
- ✅ AWS CLI (download from https://aws.amazon.com/cli/)

## Step 1: Prepare Everything

Open a terminal in this folder and run:

```bash
chmod +x prepare.sh deploy.sh
./prepare.sh
```

This will:
- Check if you have everything installed
- Install all needed packages
- Create all necessary files

## Step 2: Deploy Infrastructure

First, configure your AWS credentials:

```bash
aws configure
```

Enter your:
- AWS Access Key ID
- AWS Secret Access Key
- Region (use: us-east-1)
- Output format (press Enter)

Then deploy with Terraform:

```bash
terraform init
terraform apply
```

Type `yes` when asked to confirm.

⏱️ This takes about 2-3 minutes.

The `main.tf` file will create all AWS resources automatically.

## Step 3: Deploy the App

```bash
./deploy.sh
```

This will:
- Build the app
- Upload it to AWS
- Give you the URL

## 🎉 Done!

Your app will be live at the URL shown at the end!

Example: `https://main.d1234abcd.amplifyapp.com`

## Troubleshooting

### "command not found: terraform"
- Install Terraform from https://www.terraform.io/downloads
- Restart your terminal

### "command not found: node"
- Install Node.js from https://nodejs.org/
- Restart your terminal

### "Error: No valid credential sources found"
- Run: `aws configure`
- Enter your AWS credentials

### Need help?
- Check the AWS Console: https://console.aws.amazon.com/amplify/
- Or ask me! 😊

## Making Changes

After making code changes:

```bash
./deploy.sh
```

That's it! The app will update automatically.

## Deleting Everything

To remove everything from AWS:

```bash
terraform destroy
```

Type `yes` to confirm.

---

Made with ❤️ for tracking awesome ideas!
