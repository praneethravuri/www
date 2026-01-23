# SEO Next Steps Guide

All code changes have been completed. You just need to add the image assets.

---

## Remaining Checklist

- [ ] Create `/public/og-image.png` (1200x630px)
- [ ] Create `/public/apple-touch-icon.png` (180x180px)
- [ ] Create `/public/icon-192.png` (192x192px)
- [ ] Create `/public/icon-512.png` (512x512px)
- [ ] Submit sitemap in Google Search Console

---

## Completed

- [x] Google Search Console verification
- [x] Environment variables configured
- [x] PWA manifest created
- [x] JSON-LD schemas enhanced (ProfilePage, SoftwareSourceCode)
- [x] Sitemap lastModified date fixed
- [x] Apple touch icon metadata added
- [x] OG image metadata configured

---

## Step 1: Create Image Assets

### OG Image (Social Sharing Preview)
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

---

### Apple Touch Icon & PWA Icons
**Files to create:**
- `/public/apple-touch-icon.png` (180x180px) - iOS home screen icon
- `/public/icon-192.png` (192x192px) - PWA icon
- `/public/icon-512.png` (512x512px) - PWA icon (large)

**Quick option:** Use [favicon.io](https://favicon.io/favicon-converter/) - upload a single image and it generates all sizes.

**Image prompt for AI generation:**
```
Minimalist logo design on solid black background, single letter "P" in modern geometric sans-serif font, white color, clean lines, centered composition, simple and bold, suitable for favicon and app icon, flat design, no gradients, no shadows, no additional elements, square format, high contrast
```

---

## Step 2: Submit Sitemap

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Select your property
3. Go to **Sitemaps** in the left sidebar
4. Enter: `sitemap.xml`
5. Click **Submit**

---

## Step 3: Test Your Changes

### Test Structured Data
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- Enter your URL and verify no errors

### Test Social Sharing (after adding OG image)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

### Test PWA (after adding icons)
- Open your site in Chrome
- Open DevTools (F12) → Application → Manifest
- Verify manifest loads correctly

---

## Maintenance

### When You Update Content:
Update the `LAST_CONTENT_UPDATE` date in `app/sitemap.ts`:
```typescript
const LAST_CONTENT_UPDATE = '2025-01-23'; // Change this date
```
