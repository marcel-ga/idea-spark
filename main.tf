terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = ">= 4.0.0"
    }
    google-beta = {
      source  = "hashicorp/google-beta"
      version = ">= 4.0.0"
    }
  }
}

provider "google" {
  project = var.project_id
  region  = var.region
}

provider "google-beta" {
  project = var.project_id
  region  = var.region
}

variable "project_id" { 
  type        = string 
  description = "The ID of the GCP project you created in the Firebase console"
}

variable "region" { 
  default = "europe-west1" 
}

variable "app_id" { 
  default = "idea-spark-tracker" 
}

variable "custom_domain_name" { 
  type        = string 
  description = "The domain you want to link (e.g., ideas.example.com)"
}

# 1. Enable Required Services
resource "google_project_service" "firebase" {
  service            = "firebase.googleapis.com"
  disable_on_destroy = false
}

resource "google_project_service" "hosting" {
  service            = "firebasehosting.googleapis.com"
  disable_on_destroy = false
}

# 2. Firebase Project
resource "google_firebase_project" "default" {
  provider   = google-beta
  project    = var.project_id
  depends_on = [google_project_service.firebase]
}

# 3. Firebase Hosting Site
resource "google_firebase_hosting_site" "default" {
  provider   = google-beta
  project    = var.project_id
  site_id    = "${var.app_id}-${var.project_id}"
  depends_on = [google_firebase_project.default]
}

# 4. Custom Domain Linking
resource "google_firebase_hosting_custom_domain" "default" {
  provider      = google-beta
  project       = var.project_id
  site_id       = google_firebase_hosting_site.default.site_id
  custom_domain = var.custom_domain_name
  depends_on    = [google_firebase_hosting_site.default]
}

# Outputs
output "hosting_url" {
  value = "https://${google_firebase_hosting_site.default.site_id}.web.app"
}

output "verification_info" {
  value = "Check the Firebase Console -> Hosting to verify DNS for ${var.custom_domain_name}"
}
