@echo off
echo 🚀 IdeaSpark - Preparation Script
echo ==================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js is not installed!
    echo 📥 Please install Node.js from: https://nodejs.org/
    echo    Recommended version: 18.x or higher
    pause
    exit /b 1
)

echo ✅ Node.js is installed
node --version

REM Check if npm is installed
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ npm is not installed!
    pause
    exit /b 1
)

echo ✅ npm is installed
npm --version

REM Check if Terraform is installed
where terraform >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Terraform is not installed!
    echo 📥 Please install Terraform from: https://www.terraform.io/downloads
    pause
    exit /b 1
)

echo ✅ Terraform is installed
terraform version

REM Check if AWS CLI is installed
where aws >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ⚠️  AWS CLI is not installed (optional but recommended)
    echo 📥 Install from: https://aws.amazon.com/cli/
) else (
    echo ✅ AWS CLI is installed
    aws --version
)

echo.
echo 📦 Installing npm dependencies...
call npm install

echo.
echo 🔧 Creating configuration files...

REM Create src directory
if not exist "src" mkdir src

REM Create config.js
(
echo // AWS Configuration
echo // This file will be updated automatically after Terraform deployment
echo export const AWS_CONFIG = {
echo   region: 'us-east-1',
echo   credentials: {
echo     accessKeyId: 'REPLACE_WITH_ACCESS_KEY',
echo     secretAccessKey: 'REPLACE_WITH_SECRET_KEY'
echo   }
echo };
echo.
echo export const TABLES = {
echo   IDEAS: 'ideaspark-ideas',
echo   GROUPS: 'ideaspark-groups'
echo };
) > src\config.js

echo ✅ Created src\config.js

REM Create App.jsx
(
echo import React from 'react';
echo import IdeaTracker from './IdeaTracker';
echo.
echo function App^(^) {
echo   return ^<IdeaTracker /^>;
echo }
echo.
echo export default App;
) > src\App.jsx

echo ✅ Created src\App.jsx

REM Copy IdeaTracker if exists
if exist "idea_tracker_aws.jsx" (
    copy /Y idea_tracker_aws.jsx src\IdeaTracker.jsx >nul
    echo ✅ Copied IdeaTracker component
)

REM Create index.html
(
echo ^<!DOCTYPE html^>
echo ^<html lang="en"^>
echo   ^<head^>
echo     ^<meta charset="UTF-8" /^>
echo     ^<meta name="viewport" content="width=device-width, initial-scale=1.0" /^>
echo     ^<title^>IdeaSpark - Track Your Ideas^</title^>
echo   ^</head^>
echo   ^<body^>
echo     ^<div id="root"^>^</div^>
echo     ^<script type="module" src="/src/main.jsx"^>^</script^>
echo   ^</body^>
echo ^</html^>
) > index.html

echo ✅ Created index.html

REM Create main.jsx
(
echo import React from 'react';
echo import ReactDOM from 'react-dom/client';
echo import App from './App';
echo import './index.css';
echo.
echo ReactDOM.createRoot^(document.getElementById^('root'^)^).render^(
echo   ^<React.StrictMode^>
echo     ^<App /^>
echo   ^</React.StrictMode^>
echo ^);
) > src\main.jsx

echo ✅ Created src\main.jsx

REM Create index.css
(
echo @tailwind base;
echo @tailwind components;
echo @tailwind utilities;
echo.
echo body {
echo   margin: 0;
echo   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto';
echo   -webkit-font-smoothing: antialiased;
echo }
) > src\index.css

echo ✅ Created src\index.css

echo.
echo ✨ Preparation complete!
echo.
echo 📋 Next steps:
echo    1. Configure AWS credentials: aws configure
echo    2. Deploy infrastructure: terraform init ^&^& terraform apply
echo    3. Run deployment script: deploy.bat
echo.
pause
