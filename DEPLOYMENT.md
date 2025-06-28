# Quiz Website Deployment Guide

## Option 1: Local Development Server (Currently Running)
The website is currently running on a local server at: **http://localhost:8000**

To access it:
1. Open your web browser
2. Go to: http://localhost:8000
3. The quiz website should be fully functional

## Option 2: GitHub Pages (Recommended for Public Access)

### Step 1: Install Git
Download and install Git from: https://git-scm.com/downloads

### Step 2: Create GitHub Repository
1. Go to https://github.com
2. Click "New repository"
3. Name it "quiz-website" or similar
4. Make it public
5. Don't initialize with README

### Step 3: Upload Files
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/quiz-website.git
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings"
3. Scroll down to "Pages"
4. Select "Deploy from a branch"
5. Choose "main" branch
6. Click "Save"

Your website will be available at: `https://YOUR_USERNAME.github.io/quiz-website`

## Option 3: Netlify (Free Hosting)

### Step 1: Create Netlify Account
1. Go to https://netlify.com
2. Sign up with GitHub

### Step 2: Deploy
1. Click "New site from Git"
2. Choose GitHub
3. Select your repository
4. Click "Deploy site"

Your website will get a random URL like: `https://random-name.netlify.app`

## Option 4: Vercel (Free Hosting)

### Step 1: Create Vercel Account
1. Go to https://vercel.com
2. Sign up with GitHub

### Step 2: Deploy
1. Click "New Project"
2. Import your GitHub repository
3. Click "Deploy"

Your website will get a URL like: `https://quiz-website.vercel.app`

## Option 5: Simple File Sharing

### For Quick Testing:
1. Zip all files (index.html, script.js, styles.css, questions.js)
2. Upload to any file sharing service
3. Share the link

## File Structure
```
quiz-website/
├── index.html      (Main HTML file)
├── script.js       (JavaScript functionality)
├── styles.css      (CSS styling)
├── questions.js    (All 291 questions)
└── README.md       (Documentation)
```

## Features
- ✅ 291 questions organized in 10 groups
- ✅ 45-second timer per question
- ✅ Answer shuffling
- ✅ Correct/incorrect highlighting
- ✅ Results page with score
- ✅ Responsive design
- ✅ Modern UI

## Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge

## Notes
- The website works offline once loaded
- All questions are in Uzbek language
- Questions cover mathematical word problems and curriculum topics
- Progressive difficulty from basic to advanced concepts 