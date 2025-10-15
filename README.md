# MintFlow Landing Page

A beautiful, **pure static** landing page for MintFlow AI Document Enhancement.

## Features

- ✨ **Animated AI Copilot Demo** - Shows real-time AI working in Google Docs
- 📧 **Waitlist Registration** - Collects user information (stored locally)
- 🎨 **Modern Design** - Responsive, glassmorphism UI with smooth animations
- 🚀 **Zero Backend** - Pure HTML/CSS/JS, no server needed
- ⚡ **Instant Deploy** - Works anywhere static files are hosted

## Quick Start

```bash
# Just open the HTML file in a browser
open index.html

# Or serve locally
python3 -m http.server 8080
# or
npx serve .
```

## Deployment Options

### GitHub Pages (Recommended)
1. Push to GitHub repository
2. Enable Pages in repository settings
3. Done! Your site is live

### Netlify
1. Drag and drop the `index.html` file to Netlify
2. Or connect GitHub repo
3. Instant deployment

### Vercel
1. Connect GitHub repo to Vercel
2. Deploy automatically
3. No configuration needed

### Any Static Host
- AWS S3 + CloudFront
- Firebase Hosting
- Surge.sh
- Any CDN

## How It Works

- **Waitlist Data**: Stored in browser localStorage
- **Analytics**: Optional Google Analytics integration
- **No Backend**: Pure frontend, no server required
- **Data Access**: Check browser console for signup data

## File Structure

```
mintflow-landing/
├── index.html          # Complete landing page (all-in-one)
└── README.md          # This file
```

## Data Collection

Waitlist signups are stored in:
- **Browser localStorage** (immediate access)
- **Console logs** (for debugging)
- **Optional**: Google Analytics events

To access signup data:
```javascript
// In browser console
JSON.parse(localStorage.getItem('mintflow_waitlist'))
```

## Customization

- **Colors**: Update CSS variables in the `<style>` section
- **Content**: Modify text in the HTML
- **Animations**: Adjust timing in JavaScript
- **Analytics**: Add Google Analytics tracking code

## Production Checklist

- [ ] Test waitlist form submission
- [ ] Verify animations work on mobile
- [ ] Check responsive design
- [ ] Set up Google Analytics (optional)
- [ ] Configure custom domain
- [ ] Test on different browsers

## Why No Backend?

- **Simplicity**: One HTML file, deploy anywhere
- **Speed**: No server processing, instant loading
- **Cost**: Free hosting on GitHub Pages, Netlify, etc.
- **Reliability**: No server downtime, no maintenance
- **Scalability**: CDN handles traffic automatically
