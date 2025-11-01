# Guide to Push Your Project to GitHub

## Prerequisites

### Step 1: Install Git (if not already installed)

1. Download Git from: https://git-scm.com/download/win
2. Run the installer and follow the setup wizard
3. After installation, restart your terminal/PowerShell

### Step 2: Verify Git Installation

Open PowerShell or Command Prompt and run:
```powershell
git --version
```

If it shows a version number (e.g., `git version 2.xx.x`), you're good to go!

---

## Setting Up Your GitHub Repository

### Step 1: Initialize Git Repository

Open PowerShell in your project directory:
```powershell
cd C:\Users\Vish\travel-social-app
git init
```

### Step 2: Configure Git (if first time)

Set your name and email (use your GitHub credentials):
```powershell
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Step 3: Add All Files

```powershell
git add .
```

### Step 4: Create Initial Commit

```powershell
git commit -m "Initial commit: Travel Social App"
```

---

## Create GitHub Repository

### Option 1: Using GitHub Website

1. Go to https://github.com and log in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Repository name: `travel-social-app` (or any name you prefer)
5. Description (optional): "Travel-focused social media app similar to Beli"
6. Choose **Public** or **Private**
7. **DO NOT** initialize with README, .gitignore, or license (we already have these)
8. Click **"Create repository"**

### Option 2: Using GitHub CLI (if installed)

```powershell
gh repo create travel-social-app --public --source=. --remote=origin --push
```

---

## Connect and Push to GitHub

### Step 1: Add Remote Repository

After creating the repository on GitHub, you'll see a URL like:
- HTTPS: `https://github.com/yourusername/travel-social-app.git`
- SSH: `git@github.com:yourusername/travel-social-app.git`

Add the remote (replace with your actual URL):
```powershell
git remote add origin https://github.com/yourusername/travel-social-app.git
```

### Step 2: Rename Main Branch (if needed)

```powershell
git branch -M main
```

### Step 3: Push to GitHub

```powershell
git push -u origin main
```

You'll be prompted for your GitHub username and password (use a Personal Access Token, not your password - see below).

---

## GitHub Authentication

GitHub no longer accepts passwords for Git operations. You need a **Personal Access Token**:

### Create a Personal Access Token:

1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click **"Generate new token (classic)"**
3. Give it a name (e.g., "Travel Social App")
4. Select expiration (e.g., 90 days or no expiration)
5. Check the **`repo`** scope (full control of private repositories)
6. Click **"Generate token"**
7. **Copy the token immediately** (you won't see it again!)

### Use Token When Pushing:

When prompted for password, paste your Personal Access Token instead.

---

## Quick Commands Summary

Once everything is set up, here are the commands you'll use:

```powershell
# Navigate to project
cd C:\Users\Vish\travel-social-app

# Check status
git status

# Add changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push origin main
```

---

## Troubleshooting

### If you get "repository already exists" error:
```powershell
git remote remove origin
git remote add origin https://github.com/yourusername/travel-social-app.git
```

### If you need to update an existing repository:
```powershell
git pull origin main --allow-unrelated-histories
git push origin main
```

---

## Next Steps After Pushing

1. **Add a description** to your GitHub repository
2. **Add topics/tags** like: `react-native`, `expo`, `travel-app`, `social-media`
3. **Create issues** for future features
4. **Set up GitHub Actions** for CI/CD (optional)
5. **Add collaborators** if working in a team

---

## Your Project Files

The following files will be pushed to GitHub:
- ✅ All source code (`src/` directory)
- ✅ Configuration files (`package.json`, `app.json`, `babel.config.js`)
- ✅ README.md
- ✅ .gitignore (excludes `node_modules/`, `.expo/`, etc.)
- ❌ `node_modules/` (excluded by .gitignore)
- ❌ `.expo/` (excluded by .gitignore)

Good luck! 🚀

