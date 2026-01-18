# SEO Checklist

Use this checklist to ensure your site is fully optimized for search engines.

## 🎯 Before Launch

### Configuration
- [ ] Update site name, title, and description in `/lib/seo.ts`
- [ ] Set `NEXT_PUBLIC_SITE_URL` in `.env.local`
- [ ] Update all placeholder text in pages
- [ ] Add actual business/company information
- [ ] Update social media links in footer
- [ ] Configure analytics tracking codes

### Images & Assets
- [ ] Add `og-image.jpg` (1200x630px) to `/public`
- [ ] Add `icon-192.png` (192x192px) for PWA
- [ ] Add `icon-512.png` (512x512px) for PWA
- [ ] Add `apple-touch-icon.png` (180x180px)
- [ ] Add `favicon.ico` and `favicon-16x16.png`
- [ ] Optimize all images (compress, WebP format)
- [ ] Add alt text to all images

### Content
- [ ] Write unique, keyword-rich content
- [ ] Use proper heading hierarchy (H1, H2, H3)
- [ ] Include target keywords naturally
- [ ] Add internal links between pages
- [ ] Write compelling meta descriptions
- [ ] Ensure content is mobile-friendly

### Technical SEO
- [ ] Test sitemap: `/sitemap.xml`
- [ ] Test robots.txt: `/robots.txt`
- [ ] Test manifest: `/manifest.json`
- [ ] Verify all links work (no 404s)
- [ ] Check page load speed (<3 seconds)
- [ ] Test mobile responsiveness
- [ ] Validate HTML (no errors)
- [ ] Check HTTPS is enabled

### Structured Data
- [ ] Verify JSON-LD schema is present
- [ ] Test with [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Validate Schema.org markup
- [ ] Add appropriate schema for each page type

## 📊 After Launch

### Search Engine Setup
- [ ] Submit sitemap to [Google Search Console](https://search.google.com/search-console)
- [ ] Submit sitemap to [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [ ] Verify site ownership with search engines
- [ ] Set up Google Analytics
- [ ] Configure Google Tag Manager (optional)

### Testing
- [ ] Run [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Run Lighthouse audit (all categories 90+)
- [ ] Test with [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [ ] Validate structured data
- [ ] Test Open Graph with [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Test Twitter Cards with [Twitter Validator](https://cards-dev.twitter.com/validator)
- [ ] Check Core Web Vitals

### Monitoring
- [ ] Set up alerts in Google Search Console
- [ ] Monitor search rankings
- [ ] Track organic traffic in Analytics
- [ ] Monitor Core Web Vitals
- [ ] Check for crawl errors weekly
- [ ] Review search queries monthly

## 🚀 Ongoing Optimization

### Monthly Tasks
- [ ] Review search performance in Search Console
- [ ] Analyze top-performing pages
- [ ] Identify and fix crawl errors
- [ ] Update outdated content
- [ ] Add new content/blog posts
- [ ] Check and fix broken links
- [ ] Review and update keywords

### Quarterly Tasks
- [ ] Comprehensive SEO audit
- [ ] Update meta descriptions for low-performing pages
- [ ] Refresh old content
- [ ] Build new quality backlinks
- [ ] Review competitor SEO strategies
- [ ] Update images and multimedia
- [ ] Review and optimize site speed

### Content Best Practices
- [ ] Aim for 1,000+ words on important pages
- [ ] Use keyword variations naturally
- [ ] Include relevant images with alt text
- [ ] Add internal links to related content
- [ ] Update content regularly
- [ ] Focus on user intent
- [ ] Make content scannable (bullets, headings)

### Technical Best Practices
- [ ] Keep Core Web Vitals in "Good" range
- [ ] Maintain page speed <3 seconds
- [ ] Ensure mobile-first design
- [ ] Use semantic HTML
- [ ] Implement lazy loading for images
- [ ] Minimize JavaScript and CSS
- [ ] Use CDN for static assets

## 📈 Key Metrics to Track

### Performance
- **Largest Contentful Paint (LCP)**: <2.5s
- **First Input Delay (FID)**: <100ms
- **Cumulative Layout Shift (CLS)**: <0.1
- **Time to First Byte (TTFB)**: <600ms
- **Page Load Time**: <3s

### SEO
- **Organic Traffic**: Monthly growth
- **Keyword Rankings**: Top 10 positions
- **Click-Through Rate (CTR)**: >2% average
- **Bounce Rate**: <50%
- **Average Session Duration**: >2 minutes
- **Pages per Session**: >2

### Indexing
- **Pages Indexed**: 90%+ of total pages
- **Crawl Errors**: 0
- **Mobile Usability Issues**: 0
- **Security Issues**: 0

## 🎯 Quick Wins

Implement these for immediate SEO improvements:

1. **Optimize Title Tags**
   - Include primary keyword
   - Keep under 60 characters
   - Make it compelling

2. **Write Better Meta Descriptions**
   - Include call-to-action
   - Keep under 155 characters
   - Use keywords naturally

3. **Improve Page Speed**
   - Compress images
   - Enable caching
   - Minimize code

4. **Add Alt Text**
   - Describe images accurately
   - Include keywords when relevant
   - Keep it concise

5. **Internal Linking**
   - Link to related content
   - Use descriptive anchor text
   - Build site hierarchy

6. **Mobile Optimization**
   - Test on real devices
   - Ensure buttons are tappable
   - Improve mobile speed

## 🔧 Tools

### Free Tools
- [Google Search Console](https://search.google.com/search-console)
- [Google Analytics](https://analytics.google.com)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Schema Markup Validator](https://validator.schema.org/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)

### Paid Tools (Optional)
- Ahrefs
- SEMrush
- Moz Pro
- Screaming Frog
- Surfer SEO

## 💡 Pro Tips

1. **Focus on User Experience**: Good UX = Good SEO
2. **Content is King**: Quality > Quantity
3. **Mobile-First**: Most users are on mobile
4. **Speed Matters**: Faster sites rank better
5. **Update Regularly**: Fresh content ranks better
6. **Build Authority**: Get quality backlinks
7. **Local SEO**: Optimize for local searches if applicable
8. **Voice Search**: Use natural language and questions
9. **Video Content**: Include video when possible
10. **Stay Updated**: SEO best practices change

---

**Remember**: SEO is a marathon, not a sprint. Focus on consistent, quality improvements over time.

