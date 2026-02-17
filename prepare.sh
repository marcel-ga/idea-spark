#!/bin/bash
set -e

echo "🚀 IdeaSpark - Preparation Script"
echo "=================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "📥 Please install Node.js from: https://nodejs.org/"
    echo "   Recommended version: 18.x or higher"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed!"
    exit 1
fi

echo "✅ npm version: $(npm --version)"

# Check if Terraform is installed
if ! command -v terraform &> /dev/null; then
    echo "❌ Terraform is not installed!"
    echo "📥 Please install Terraform from: https://www.terraform.io/downloads"
    exit 1
fi

echo "✅ Terraform version: $(terraform version -json | grep -o '"terraform_version":"[^"]*' | cut -d'"' -f4)"

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo "⚠️  AWS CLI is not installed (optional but recommended)"
    echo "📥 Install from: https://aws.amazon.com/cli/"
else
    echo "✅ AWS CLI version: $(aws --version | cut -d' ' -f1)"
fi

echo ""
echo "📦 Installing npm dependencies..."
npm install

echo ""
echo "🔧 Creating configuration files..."

# Create src directory if it doesn't exist
mkdir -p src

# Create config template
cat > src/config.js << 'EOF'
// AWS Configuration
// This file will be updated automatically after Terraform deployment
export const AWS_CONFIG = {
  region: 'us-east-1',
  credentials: {
    accessKeyId: 'REPLACE_WITH_ACCESS_KEY',
    secretAccessKey: 'REPLACE_WITH_SECRET_KEY'
  }
};

export const TABLES = {
  IDEAS: 'ideaspark-ideas',
  GROUPS: 'ideaspark-groups'
};
EOF

echo "✅ Created src/config.js"

# Create main App file
cat > src/App.jsx << 'EOF'
import React from 'react';
import IdeaTracker from './IdeaTracker';

function App() {
  return <IdeaTracker />;
}

export default App;
EOF

echo "✅ Created src/App.jsx"

# Copy the AWS version as IdeaTracker
if [ -f "idea_tracker_aws.jsx" ]; then
    cp idea_tracker_aws.jsx src/IdeaTracker.jsx
    echo "✅ Copied IdeaTracker component"
fi

# Create index.html
cat > index.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>IdeaSpark - Track Your Ideas</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
EOF

echo "✅ Created index.html"

# Create main.jsx
cat > src/main.jsx << 'EOF'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
EOF

echo "✅ Created src/main.jsx"

# Create index.css with Tailwind
cat > src/index.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
EOF

echo "✅ Created src/index.css"

# Create Tailwind config
cat > tailwind.config.js << 'EOF'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}
EOF

echo "✅ Created tailwind.config.js"

# Create PostCSS config
cat > postcss.config.js << 'EOF'
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
EOF

echo "✅ Created postcss.config.js"

# Create Vite config
cat > vite.config.js << 'EOF'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
})
EOF

echo "✅ Created vite.config.js"

# Create .gitignore
cat > .gitignore << 'EOF'
node_modules
dist
.env
.env.local
*.log
.DS_Store
.terraform
*.tfstate
*.tfstate.backup
.terraform.lock.hcl
src/config.js
EOF

echo "✅ Created .gitignore"

echo ""
echo "✨ Preparation complete!"
echo ""
echo "📋 Next steps:"
echo "   1. Configure AWS credentials: aws configure"
echo "   2. Deploy infrastructure: terraform init && terraform apply"
echo "   3. Run deployment script: ./deploy.sh"
echo ""
