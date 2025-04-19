# Automatic Deployment from GitHub to Netlify

This guide explains how to set up automatic deployment from GitHub to Netlify for your Donut Rescue Team website.

## Setup Instructions

### 1. Push Your Code to GitHub

If you haven't already, create a GitHub repository and push your code:

```bash
# Initialize git repository (if not already done)
git init

# Add all files to git
git add .

# Commit your changes
git commit -m "Initial commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

### 2. Connect to Netlify

1. Go to [Netlify](https://app.netlify.com/) and sign in (create an account if needed)
2. Click "Add new site" → "Import an existing project"
3. Select GitHub as your Git provider
4. Authorize Netlify to access your GitHub account
5. Select your repository

### 3. Configure Build Settings

Netlify will automatically detect your build settings from the `netlify.toml` file, but confirm:

- Build command: `npm run build`
- Publish directory: `dist`

### 4. Set Up Environment Variables (if needed)

If your project requires environment variables:

1. Go to Site settings → Build & deploy → Environment
2. Add your environment variables

### 5. Set Up GitHub Actions (Already Done)

A GitHub Actions workflow file has been created at `.github/workflows/netlify-deploy.yml` that will:

- Trigger on pushes to your main branch
- Build your project
- Deploy to Netlify

### 6. Add Netlify Secrets to GitHub

To make the GitHub Actions workflow work, add these secrets to your GitHub repository:

1. Go to your GitHub repository → Settings → Secrets and variables → Actions
2. Add two new repository secrets:
   - `NETLIFY_AUTH_TOKEN`: Your Netlify personal access token (get from Netlify User Settings → Applications)
   - `NETLIFY_SITE_ID`: Your site ID (found in the `.netlify/state.json` file: `cc0b3b67-7d14-43c4-8df3-655b572102f1`)

## That's it!

Now whenever you push changes to your GitHub repository's main branch, GitHub Actions will automatically build your project and deploy it to Netlify.