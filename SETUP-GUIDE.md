# Quick Setup Guide

## ⚠️ Important: Node.js Version

This project requires **Node.js 20.9.0 or higher**. Your current version is 18.20.8.

### Upgrade Node.js

**Option 1: Using nvm (Recommended)**
```bash
# Install nvm if you haven't
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install Node.js 20
nvm install 20

# Use Node.js 20
nvm use 20

# Set as default
nvm alias default 20
```

**Option 2: Download from Node.js website**
Visit: https://nodejs.org/ and download Node.js 20 LTS

## 🚀 Quick Start

Once you have Node.js 20+:

```bash
# 1. Install dependencies
npm install

# 2. Create environment file
cp .env.local.example .env.local  # if available
# or create manually:
echo "NEXT_PUBLIC_SITE_URL=http://localhost:3000" > .env.local

# 3. Run development server
npm run dev

# 4. Open browser
# Visit http://localhost:3000
```

## 🔧 Development Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production
npm start        # Run production server
npm run lint     # Check for code issues
```

## ✅ Verify Installation

After starting the dev server, test these URLs:

- Main site: http://localhost:3000
- Sitemap: http://localhost:3000/sitemap.xml
- Robots: http://localhost:3000/robots.txt
- Manifest: http://localhost:3000/manifest.json

## 📝 Next Steps

1. **Update Site Configuration**
   - Edit `/lib/seo.ts` with your actual site information
   - Update company name, description, keywords, etc.

2. **Add Images**
   - Add `og-image.jpg` (1200x630px) to `/public`
   - Add PWA icons: `icon-192.png`, `icon-512.png`
   - Add `apple-touch-icon.png` (180x180px)

3. **Configure Environment**
   - Update `.env.local` with your production URL
   - Add verification codes when ready

4. **Customize Content**
   - Edit `/app/page.tsx` with your actual content
   - Update colors, fonts, and styling as needed

5. **Deploy**
   - Push to GitHub
   - Deploy to Vercel, Netlify, or your preferred platform

## 📚 Documentation

- [SEO Features Documentation](./SEO-FEATURES.md)
- [Main README](./README.md)

## 🆘 Troubleshooting

### Port 3000 already in use
```bash
# Kill process on port 3000
npx kill-port 3000
# Or use a different port
npm run dev -- -p 3001
```

### Build errors
```bash
# Clear Next.js cache
rm -rf .next
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Module not found
```bash
# Reinstall dependencies
npm install
```

## 💡 Pro Tips

1. **Always run in production mode before deploying**
   ```bash
   npm run build && npm start
   ```

2. **Check SEO with Lighthouse**
   - Open Chrome DevTools (F12)
   - Go to Lighthouse tab
   - Run audit on "SEO" and "Performance"

3. **Test on mobile devices**
   - Use Chrome DevTools device emulator
   - Test on real devices when possible

4. **Monitor performance**
   - Use Next.js built-in analytics
   - Set up Google Analytics
   - Monitor Core Web Vitals

---

Need help? Check the [README.md](./README.md) or [SEO-FEATURES.md](./SEO-FEATURES.md)

