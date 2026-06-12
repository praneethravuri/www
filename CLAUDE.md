# CLAUDE.md

Personal portfolio for Praneeth Ravuri (praneethravuri.com). Single-page Next.js site implementing the "Portfolio v3" design — a pure-black, monochrome, 640px single-column layout.

## Commands

- `pnpm dev` — dev server
- `pnpm build` — production build (run this to verify changes; TypeScript strict)
- `pnpm lint` — ESLint (flat config)
- `pnpm analyze` — bundle analysis (`ANALYZE=true next build`)

Package manager is **pnpm**. Build approvals/overrides live in `pnpm-workspace.yaml` (`allowBuilds`), not package.json.

## Hard constraints

- **ESLint must stay on v9** — v10 breaks eslint-plugin-react via eslint-config-next 16.x.
- **Design is locked to pure-black monochrome**: bg `#000000`, ink `#ffffff`, body `#a3a3a3`, muted `#7c7c7c`, faint `#5a5a5a`, surfaces `#0e0e0e`, hairlines `rgba(255,255,255,0.08/0.14)`. Do NOT add color, gradients, cards, link underlines, navbars/docks, or extra fonts. Geist only (via next/font, `--font-geist-sans`).
- Keep sections as **server components**; the only client components are `components/TopBar.tsx` (live Chicago clock) and `components/ui/blur-fade.tsx` / `noise-texture.tsx`.
- Animations: only the BlurFade fade-up reveal (offset 14, duration 0.7, blur "0px", staggered small delays). It must keep respecting `prefers-reduced-motion` **without changing the rendered DOM shape** (hydration safety — reveal instantly via zero-duration transition instead of branching the tree).
- Images are **sharp-cornered** (no border radius) and go through `next/image`.

## Architecture

- **All content lives in `app/data/resume.tsx`** (`data` export) — name, summary, taglines, contact/socials, work, projects, education. Components render from it; edit content there, not in components.
- `app/page.tsx` renders TopBar → Hero → WorkExperience → Projects → Education → Footer inside `<main class="max-w-[640px]">`.
- `app/layout.tsx` holds all SEO metadata, JSON-LD structured data, Vercel Analytics/Speed Insights, the skip link, and the site-wide `<NoiseTexture>` overlay (intensity tuned here).
- `app/globals.css` — Tailwind v4 CSS-first `@theme` tokens (the palette above), body base type (17px / weight 440 / -0.01em), inverted `::selection`, custom scrollbar.
- Design-exact values use Tailwind arbitrary classes (`text-[27px] font-[560] tracking-[-0.025em]`).
- Machine-readable resume: `app/llms.txt/route.ts` (llms.txt convention, generated from resume data). Also `manifest.ts`, `robots.ts`, `sitemap.ts`, `opengraph-image.tsx`, `twitter-image.tsx` — keep in sync with the palette/content.
- Icons: `@phosphor-icons/react` — import from `@phosphor-icons/react/ssr` in server components, root import in client components.
- shadcn registries configured in `components.json`: `@shadcn`, `@magicui`, `@aceternity`. Add components via `pnpm dlx shadcn@latest add <item>`.

## Known TODO

- The Résumé link URL in `app/data/resume.tsx` is a truncated placeholder (`document/d/1Ue.../`) awaiting the real Google Doc share link.
