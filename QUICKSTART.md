# Quick Fix: Site Not Found

The hosting site exists but has no content deployed. Here's how to fix it:

## Option 1: Deploy a Simple Test Page

```bash
# 1. Login to Firebase
firebase login

# 2. Initialize Firebase in your project
firebase init hosting

# When prompted:
# - Select your existing project
# - Public directory: public (or press Enter)
# - Single-page app: No
# - Set up automatic builds: No
# - Don't overwrite index.html if it exists

# 3. Create a simple test page
echo "<h1>IdeaSpark - Coming Soon</h1>" > public/index.html

# 4. Deploy
firebase deploy --only hosting
```

## Option 2: Deploy Your React App

If you have a React app ready:

```bash
# 1. Build your React app
npm run build

# 2. Initialize Firebase (if not done)
firebase init hosting

# When prompted:
# - Public directory: build (for React)
# - Single-page app: Yes
# - Set up automatic builds: No
# - Don't overwrite index.html

# 3. Deploy
firebase deploy --only hosting
```

## Option 3: Manual Deploy via Console

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Go to **Hosting** in left menu
4. Click **Get started** or **Add another site**
5. Follow the wizard to deploy

## Verify Deployment

After deploying, visit your hosting URL:
```bash
# Get your hosting URL
terraform output hosting_url

# Or check in Firebase Console → Hosting
```

## Common Issues

### "No targets found"
Run: `firebase target:apply hosting main your-site-id`

### "Authorization failed"
Run: `firebase login --reauth`

### Wrong site ID
Check: `firebase hosting:sites:list`
Update `.firebaserc` with correct site ID

## Next Steps

Once you see your page:
1. Enable Authentication (Anonymous)
2. Set up Firestore rules
3. Deploy your full React app
