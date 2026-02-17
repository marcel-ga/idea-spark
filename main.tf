terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

variable "aws_region" {
  default     = "us-east-1"
  description = "AWS region for deployment"
}

variable "app_name" {
  default     = "ideaspark"
  description = "Application name"
}

variable "github_token" {
  type        = string
  description = "GitHub personal access token (optional - for auto-deploy from GitHub)"
  default     = ""
  sensitive   = true
}

variable "repository_url" {
  type        = string
  description = "GitHub repository URL (optional)"
  default     = ""
}

# DynamoDB Tables
resource "aws_dynamodb_table" "ideas" {
  name         = "ideaspark-ideas"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "PK"
  range_key    = "SK"

  attribute {
    name = "PK"
    type = "S"
  }

  attribute {
    name = "SK"
    type = "S"
  }

  attribute {
    name = "status"
    type = "S"
  }

  global_secondary_index {
    name            = "StatusIndex"
    hash_key        = "PK"
    range_key       = "status"
    projection_type = "ALL"
  }

  tags = {
    Name = "IdeaSpark Ideas"
  }
}

resource "aws_dynamodb_table" "groups" {
  name         = "ideaspark-groups"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "PK"
  range_key    = "SK"

  attribute {
    name = "PK"
    type = "S"
  }

  attribute {
    name = "SK"
    type = "S"
  }

  tags = {
    Name = "IdeaSpark Groups"
  }
}

# IAM Role for Amplify
resource "aws_iam_role" "amplify" {
  name = "${var.app_name}-amplify-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action = "sts:AssumeRole"
      Effect = "Allow"
      Principal = {
        Service = "amplify.amazonaws.com"
      }
    }]
  })
}

resource "aws_iam_role_policy_attachment" "amplify_backend" {
  role       = aws_iam_role.amplify.name
  policy_arn = "arn:aws:iam::aws:policy/AdministratorAccess-Amplify"
}

# Amplify App
resource "aws_amplify_app" "app" {
  name       = var.app_name
  repository = var.repository_url != "" ? var.repository_url : null

  # Build settings for React app
  build_spec = <<-EOT
    version: 1
    frontend:
      phases:
        preBuild:
          commands:
            - npm ci
        build:
          commands:
            - npm run build
      artifacts:
        baseDirectory: dist
        files:
          - '**/*'
      cache:
        paths:
          - node_modules/**/*
  EOT

  # Environment variables for the app
  environment_variables = {
    REACT_APP_AWS_REGION           = var.aws_region
    REACT_APP_DYNAMODB_IDEAS_TABLE = aws_dynamodb_table.ideas.name
    REACT_APP_DYNAMODB_GROUPS_TABLE = aws_dynamodb_table.groups.name
  }

  # Enable auto branch creation
  enable_branch_auto_build = true
  enable_branch_auto_deletion = true

  # Custom rules for SPA routing
  custom_rule {
    source = "/<*>"
    status = "404"
    target = "/index.html"
  }

  iam_service_role_arn = aws_iam_role.amplify.arn

  tags = {
    Name = "IdeaSpark"
  }
}

# Main branch
resource "aws_amplify_branch" "main" {
  app_id      = aws_amplify_app.app.id
  branch_name = "main"
  
  enable_auto_build = true

  framework = "React"
  stage     = "PRODUCTION"
}

# IAM User for frontend DynamoDB access
resource "aws_iam_user" "frontend" {
  name = "${var.app_name}-frontend-user"
}

resource "aws_iam_user_policy" "frontend_dynamodb" {
  name = "${var.app_name}-dynamodb-access"
  user = aws_iam_user.frontend.name

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "dynamodb:PutItem",
          "dynamodb:GetItem",
          "dynamodb:Query",
          "dynamodb:Scan",
          "dynamodb:UpdateItem",
          "dynamodb:DeleteItem"
        ]
        Resource = [
          aws_dynamodb_table.ideas.arn,
          "${aws_dynamodb_table.ideas.arn}/index/*",
          aws_dynamodb_table.groups.arn
        ]
      }
    ]
  })
}

resource "aws_iam_access_key" "frontend" {
  user = aws_iam_user.frontend.name
}

# Outputs
output "amplify_app_id" {
  value       = aws_amplify_app.app.id
  description = "Amplify App ID"
}

output "amplify_default_domain" {
  value       = "https://main.${aws_amplify_app.app.default_domain}"
  description = "Amplify default domain"
}

output "aws_access_key_id" {
  value       = aws_iam_access_key.frontend.id
  description = "AWS Access Key ID for frontend"
}

output "aws_secret_access_key" {
  value       = aws_iam_access_key.frontend.secret
  description = "AWS Secret Access Key for frontend"
  sensitive   = true
}

output "dynamodb_ideas_table" {
  value = aws_dynamodb_table.ideas.name
}

output "dynamodb_groups_table" {
  value = aws_dynamodb_table.groups.name
}

output "deployment_instructions" {
  value = <<-EOT
    
    ✅ Infrastructure deployed successfully!
    
    Next steps:
    1. Run: ./prepare.sh
    2. Update src/config.js with AWS credentials
    3. Run: ./deploy.sh
    
    Your app will be available at:
    https://main.${aws_amplify_app.app.default_domain}
    
  EOT
}
