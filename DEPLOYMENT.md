# React Portfolio Deployment Guide

## 🚀 How to Deploy Your React Portfolio to GitHub Pages

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Move Assets
Move your existing assets to the `public` folder:
```bash
mkdir -p public/assets
cp assets/* public/assets/
```

### Step 3: Install gh-pages Package
```bash
npm install --save-dev gh-pages
```

### Step 4: Build and Deploy
```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### Step 5: Configure GitHub Pages
1. Go to your GitHub repository
2. Click on "Settings"
3. Scroll down to "GitHub Pages" section
4. Select "gh-pages" branch as source
5. Save the settings

## 📁 Project Structure
```
sample-resume/
├── public/
│   ├── index.html
│   └── assets/
│       ├── Roj.png
│       └── My_Github_Profile_QR.png
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Experience.js
│   │   ├── Projects.js
│   │   ├── Footer.js
│   │   └── QRCode.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🔧 Available Scripts
- `npm start` - Run development server
- `npm run build` - Build for production
- `npm run deploy` - Deploy to GitHub Pages
- `npm test` - Run tests

## 🌐 Live URL
Your portfolio will be available at: `https://rojpatigdas.github.io/sample-resume`

## 📝 Notes
- The React app maintains the same visual design as your original HTML version
- All animations and hover effects are preserved
- The QR code functionality remains the same
- The site is fully responsive and optimized for all devices 