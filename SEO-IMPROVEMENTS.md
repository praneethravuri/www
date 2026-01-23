# SEO Next Steps Guide

This guide explains what you need to do to complete the SEO improvements. All code changes have been made - you just need to add the assets and verification tokens.

---

## Quick Checklist

- [ ] Create `/public/og-image.png` (1200x630px)
- [ ] Create `/public/apple-touch-icon.png` (180x180px)
- [ ] Create `/public/icon-192.png` (192x192px)
- [ ] Create `/public/icon-512.png` (512x512px)
- [ ] Get Google Search Console verification token
- [ ] Add token to `.env.local`
- [ ] Deploy and verify in Google Search Console
- [ ] Submit sitemap

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

### Apple Touch Icon
**File:** `/public/apple-touch-icon.png`
**Size:** 180 x 180 pixels

This appears when someone adds your site to their iOS home screen.

**How to create:**
1. Use your profile photo or create a simple logo/avatar
2. Square format, no transparency
3. Resize to 180x180px
4. Save as PNG

**Quick option:** Use [favicon.io](https://favicon.io/favicon-converter/) - upload an image and it generates all sizes.

---

### PWA Icons
**Files:**
- `/public/icon-192.png` (192 x 192 pixels)
- `/public/icon-512.png` (512 x 512 pixels)

These are used for Progressive Web App (PWA) functionality.

**How to create:**
1. Use the same base image as your apple-touch-icon
2. Resize to both 192x192 and 512x512
3. Save as PNG

---

## Step 2: Google Search Console Verification

### Get Your Verification Token

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add property"
3. Choose "URL prefix" and enter: `https://praneethravuri.com`
4. Select "HTML tag" verification method
5. You'll see a meta tag like:
   ```html
   <meta name="google-site-verification" content="abc123xyz..." />
   ```
6. Copy ONLY the content value: `abc123xyz...`

### Add Token to Environment

1. Open `.env.local` in your project root
2. Add your token:
   ```
   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=abc123xyz...
   ```
3. Save the file

### For Vercel Deployment

Add the environment variable in Vercel:
1. Go to your project in [Vercel Dashboard](https://vercel.com)
2. Settings → Environment Variables
3. Add:
   - Name: `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
   - Value: Your token
   - Environment: Production (and Preview/Development if desired)

---

## Step 3: Deploy and Verify

1. **Deploy your changes:**
   ```bash
   git add .
   git commit -m "Add SEO improvements: PWA manifest, enhanced schemas, OG image"
   git push
   ```

2. **Verify in Google Search Console:**
   - Go back to Search Console
   - Click "Verify"
   - It should now find your verification meta tag

3. **Submit your sitemap:**
   - In Search Console, go to Sitemaps
   - Enter: `sitemap.xml`
   - Click Submit

---

## Step 4: Test Your Changes

### Test Structured Data
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- Enter your URL and verify no errors

### Test Social Sharing
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

### Test PWA
- Open your site in Chrome
- Open DevTools (F12) → Application → Manifest
- Verify manifest loads correctly

---

## What Was Changed

### Modified Files:
- `app/layout.tsx` - Enhanced metadata, apple icons, JSON-LD schemas
- `app/sitemap.ts` - Fixed lastModified date

### New Files:
- `app/manifest.ts` - PWA web app manifest
- `.env.template` - Environment variable template
- `.env.local` - Local environment variables (git ignored)

### JSON-LD Schema Additions:
- `ProfilePage` - Better profile representation
- `SoftwareSourceCode` - Projects now typed as code repositories

---

## Optional: Yandex Verification

If you want to target the Russian search market:

1. Go to [Yandex Webmaster](https://webmaster.yandex.com)
2. Add your site
3. Get the verification meta tag content
4. Add to `.env.local`:
   ```
   NEXT_PUBLIC_YANDEX_VERIFICATION=your_token_here
   ```

---

## Maintenance

### When You Update Content:
Update the `LAST_CONTENT_UPDATE` date in `app/sitemap.ts`:
```typescript
const LAST_CONTENT_UPDATE = '2025-01-23'; // Change this date
```

---

# Original SEO Improvement Plan for praneethravuri.com

## Current State Assessment

Your website already has **excellent SEO fundamentals**:
- ✅ Complete metadata (title, description, keywords, authors)
- ✅ Open Graph & Twitter Cards configured
- ✅ Comprehensive JSON-LD structured data (Person, WebSite, WebPage, OrganizationRole, CreativeWork)
- ✅ Sitemap and robots.txt generated
- ✅ Image optimization (AVIF/WebP, responsive sizes)
- ✅ Font optimization with `display: swap`
- ✅ Security headers configured
- ✅ Vercel Analytics & Speed Insights integrated

## Recommended Improvements

### 1. Complete Search Engine Verification (Quick Win)
**File:** `app/layout.tsx` (lines 101-104)

Currently placeholder values:
```typescript
verification: {
  google: "google-site-verification=...",  // ← Needs real token
  yandex: "yandex-verification=...",       // ← Needs real token
}
```

**Action:**
- Register site with [Google Search Console](https://search.google.com/search-console)
- Get verification token and replace placeholder
- Optionally add Bing Webmaster Tools verification

**Note:** You'll need to provide your Google verification token. I'll add a placeholder that you can update, or remove the verification section entirely if you prefer to add it later.

---

### 2. Add Apple Touch Icons & Web App Manifest
**File:** `app/layout.tsx`

**Missing:**
- Apple touch icons for iOS home screen
- Web app manifest for PWA support

**Action:** Add to metadata `icons` section:
```typescript
icons: {
  icon: "/favicon.ico",
  apple: [
    { url: "/apple-touch-icon.png", sizes: "180x180" },
  ],
},
```

**New file:** `app/manifest.ts` for PWA support:
```typescript
import { MetadataRoute } from 'next'
import { data } from '@/app/data/resume'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${data.firstName} ${data.lastName}`,
    short_name: data.firstName,
    description: data.summary,
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  }
}
```

**Required assets to create:**
- `/public/apple-touch-icon.png` (180x180)
- `/public/icon-192.png` (192x192)
- `/public/icon-512.png` (512x512)

---

### 3. Enhance Open Graph Image
**Current:** Static `/hero.webp` (profile photo)

**Recommendation:** Create a dedicated OG image optimized for social sharing:
- Size: 1200x630px (optimal for Twitter/LinkedIn/Facebook)
- Include: Name, title, key skills, professional design
- Format: PNG or JPEG (better social platform support than WebP)

**Action:** Create `/public/og-image.png` and update metadata in `app/layout.tsx`:
```typescript
openGraph: {
  // ... existing config
  images: [
    {
      url: "/og-image.png",  // ← New dedicated OG image
      width: 1200,
      height: 630,
      alt: `${data.firstName} ${data.lastName} - ${data.title}`,
    },
  ],
},
twitter: {
  // ... existing config
  images: [`${data.url}/og-image.png`],  // ← Update Twitter image too
},
```

---

### 4. Add Alternate Language & Locale Support (Optional)
**For international SEO visibility:**

```typescript
alternates: {
  canonical: data.url,
  languages: {
    'en-US': data.url,
  },
},
```

---

### 5. Improve Sitemap with Last Modified Dates
**File:** `app/sitemap.ts`

**Current issue:** `lastModified: new Date()` updates on every build, not reflecting actual content changes.

**Improved approach:**
```typescript
import { MetadataRoute } from 'next'
import { data } from '@/app/data/resume'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: data.url,
      lastModified: new Date('2025-01-21'), // Set to actual last content update date
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
```

---

### 6. Add ProfilePage Schema to JSON-LD
**Enhance structured data for better rich snippets:**

Add to the `@graph` array in `app/layout.tsx`:
```typescript
{
  "@type": "ProfilePage",
  "@id": `${data.url}#profilepage`,
  dateCreated: "2024-01-01",  // When you first created the site
  dateModified: "2025-01-21", // Last content update
  mainEntity: { "@id": `${data.url}#person` },
}
```

---

### 7. Enhance Project Schema with SoftwareSourceCode
**Current:** Projects use generic `CreativeWork` schema

**Improved:** Use `SoftwareSourceCode` for better GitHub project representation. Replace the projects mapping in JSON-LD:
```typescript
...data.projects.map((project, idx) => ({
  "@type": "SoftwareSourceCode",
  "@id": `${data.url}#project-${idx}`,
  name: project.name,
  description: project.description,
  codeRepository: project.url,
  programmingLanguage: project.techStack,
  author: { "@id": `${data.url}#person` },
})),
```

---

### 8. Add Preconnect Hints for External Resources (Optional)
**File:** `app/layout.tsx`

Next.js automatically handles preconnect for Google Fonts when using `next/font/google`, so this is likely already optimized. You can verify by checking the rendered HTML.

If you add other external resources in the future, add preconnect hints like:
```tsx
<head>
  <link rel="preconnect" href="https://example.com" />
</head>
```

---

## Summary of Changes

| Change | Priority | Impact | Effort |
|--------|----------|--------|--------|
| Search engine verification tokens | High | Enables Search Console data | Low |
| Apple touch icons | Medium | iOS user experience | Low |
| Web app manifest | Medium | PWA support, installability | Low |
| Dedicated OG image | Medium | Better social sharing appearance | Medium |
| Sitemap last modified fix | Low | More accurate for crawlers | Low |
| ProfilePage schema | Low | Richer search snippets | Low |
| SoftwareSourceCode schema | Low | Better project representation | Low |

---

## Files to Modify

1. **`app/layout.tsx`** - Add apple icons, enhanced JSON-LD (ProfilePage, SoftwareSourceCode), update OG image path
2. **`app/sitemap.ts`** - Fix lastModified date

## Files to Create

1. **`app/manifest.ts`** - Web app manifest for PWA support

## Assets to Create (Manual)

These image assets need to be created by you:
1. `/public/apple-touch-icon.png` (180x180) - iOS home screen icon
2. `/public/icon-192.png` (192x192) - PWA icon
3. `/public/icon-512.png` (512x512) - PWA icon (large)
4. `/public/og-image.png` (1200x630) - Social sharing preview image

**Tip:** You can use tools like Figma, Canva, or an online favicon generator to create these from your existing hero image.

---

## Verification Steps

After implementation:
1. Run `npm run build && npm run start` to test locally
2. Use [Google Rich Results Test](https://search.google.com/test/rich-results) to validate structured data
3. Use [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) to preview OG tags
4. Use [Twitter Card Validator](https://cards-dev.twitter.com/validator) to test Twitter cards
5. Check `/sitemap.xml` and `/robots.txt` are accessible
6. Submit sitemap to Google Search Console after verification
