# Google Cloud Provider
provider "google" {
  project = var.project_id
  region  = var.region
}

variable "project_id" {
  description = "The ID of the GCP project you created in the Firebase console"
  type        = string
}

variable "region" {
  default = "us-central1"
}

variable "app_id" {
  default = "idea-spark-tracker"
}

# 1. Enable Required Services
resource "google_project_service" "firebase" {
  service = "firebase.googleapis.com"
  disable_on_destroy = false
}

resource "google_project_service" "hosting" {
  service = "firebasehosting.googleapis.com"
  disable_on_destroy = false
}

# 2. Firebase Project (Links to the GCP Project)
resource "google_firebase_project" "default" {
  provider = google
  project  = var.project_id
  depends_on = [google_project_service.firebase]
}

# 3. Firebase Hosting Site
resource "google_firebase_hosting_site" "default" {
  provider = google
  project  = google_firebase_project.default.project
  site_id  = "${var.app_id}-${var.project_id}"
}

# 4. GCS Bucket for build artifacts (Optional but good practice)
resource "google_storage_bucket" "build_artifacts" {
  name     = "${var.project_id}-build-assets"
  location = "US"
  force_destroy = true
  
  public_access_prevention = "enforced"
}

# Outputs
output "hosting_url" {
  value = "https://${google_firebase_hosting_site.default.site_id}.web.app"
}
