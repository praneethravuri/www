# SEO Next Steps Guide

Almost everything is complete. Just two items remaining.

---

## Remaining Checklist

- [ ] Create `/public/og-image.png` (1200x630px) - Social sharing preview image
- [ ] Register with [Bing Webmaster Tools](https://www.bing.com/webmasters) and add verification token to `.env.local`

---

## Completed

### Initial SEO Setup
- [x] Google Search Console verification
- [x] Sitemap submitted to Google Search Console
- [x] Environment variables configured
- [x] PWA manifest created
- [x] JSON-LD schemas (Person, WebSite, WebPage, ProfilePage, SoftwareSourceCode)
- [x] Sitemap lastModified date fixed
- [x] Favicon and icons added (`/public/favicon.ico`, `/public/icons/`)
- [x] Apple touch icon added (`/public/icons/apple-touch-icon.png`)
- [x] PWA icons added (`android-chrome-192x192.png`, `android-chrome-512x512.png`)

### Additional SEO Improvements (Just Added)
- [x] Bing Webmaster Tools verification support added to metadata
- [x] Breadcrumb schema added to JSON-LD
- [x] x-default hreflang added for international SEO
- [x] Skip-to-content link added for accessibility
- [x] Improved image alt texts (hero image now includes full name and title)
- [x] ARIA labels added to view mode toggle button
- [x] Status indicator has aria-label for screen readers
- [x] Cache headers added for static assets (icons, images, favicon, og-image)

---

## Create OG Image (Social Sharing Preview)

**File:** `/public/og-image.png`
**Size:** 1200 x 630 pixels

This image appears when your site is shared on Twitter, LinkedIn, Facebook, etc.

**How to create:**
1. Go to [Figma](https://figma.com) or [Canva](https://canva.com)
2. Create a new design with dimensions 1200x630
3. Design should include:
   - Your name: "Praneeth Ravuri"
   - Your title: "AI Engineer"
   - Optional: Your photo, key skills, or a professional background
4. Export as PNG
5. Save to `/public/og-image.png`

**Design tips:**
- Use high contrast text (white on dark or dark on light)
- Keep text large and readable at small sizes
- Avoid text near edges (some platforms crop)
- Match your site's dark theme aesthetic

**AI prompt for generating:**
```
Professional social media card design, 1200x630 pixels, dark background (#000000), "Praneeth Ravuri" in large white modern sans-serif font, "AI Engineer" subtitle below, minimal geometric accents, clean tech aesthetic, high contrast, no photo, suitable for LinkedIn and Twitter sharing
```

---

## Add Bing Verification Token

1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add your site and choose "HTML Meta Tag" verification
3. Copy the content value from the meta tag
4. Add to `.env.local`:
   ```
   NEXT_PUBLIC_BING_VERIFICATION=your_token_here
   ```
5. Add to Vercel environment variables for production
6. Deploy and verify

---

## Test Your Changes

### Test Structured Data
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- Verify Breadcrumb schema appears correctly

### Test Social Sharing (after adding OG image)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

### Test PWA
- Open your site in Chrome
- Open DevTools (F12) → Application → Manifest
- Verify manifest loads correctly

### Test Accessibility
- Run Lighthouse audit in Chrome DevTools
- Verify skip-to-content link works (Tab on page load)
- Verify ARIA labels are present on toggle button

---

## Maintenance

### When You Update Content:
Update the `LAST_CONTENT_UPDATE` date in `app/sitemap.ts`:
```typescript
const LAST_CONTENT_UPDATE = '2025-01-23'; // Change this date
```
