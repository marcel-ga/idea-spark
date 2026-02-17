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
  default = "us-east-1"
}

# Ideas Table (for both user and group ideas)
resource "aws_dynamodb_table" "ideas" {
  name           = "ideaspark-ideas"
  billing_mode   = "PAY_PER_REQUEST"
  hash_key       = "PK"
  range_key      = "SK"

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
    Name        = "IdeaSpark Ideas"
    Environment = "production"
  }
}

# Groups Table
resource "aws_dynamodb_table" "groups" {
  name           = "ideaspark-groups"
  billing_mode   = "PAY_PER_REQUEST"
  hash_key       = "PK"
  range_key      = "SK"

  attribute {
    name = "PK"
    type = "S"
  }

  attribute {
    name = "SK"
    type = "S"
  }

  tags = {
    Name        = "IdeaSpark Groups"
    Environment = "production"
  }
}

# Outputs
output "ideas_table_name" {
  value = aws_dynamodb_table.ideas.name
}

output "groups_table_name" {
  value = aws_dynamodb_table.groups.name
}

output "ideas_table_arn" {
  value = aws_dynamodb_table.ideas.arn
}

output "groups_table_arn" {
  value = aws_dynamodb_table.groups.arn
}
