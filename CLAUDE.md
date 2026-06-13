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
- **Two monochrome themes (dark + light)**: dark is the pure-black palette (bg `#000000`, ink `#ffffff`, body `#a3a3a3`, muted `#7c7c7c`, faint `#5a5a5a`, surfaces `#0e0e0e`, hairlines `rgba(255,255,255,0.08/0.14)`); light is its inverted counterpart (bg `#ffffff`, ink `#0a0a0a`, body `#404040`, muted `#6b6b6b`, faint `#8f8f8f`, surfaces `#f5f5f5`, hairlines `rgba(0,0,0,0.10/0.16)`). The palette lives as raw CSS vars in `:root` (light) / `.dark` (dark) in `app/globals.css`, mapped to Tailwind tokens via `@theme inline`. Theme defaults to the OS `prefers-color-scheme` and persists the user's toggle in `localStorage('theme')`; a no-flash inline script in `app/layout.tsx`'s `<head>` applies the class before paint. Still strictly monochrome — do NOT add color, gradients, cards, link underlines, navbars/docks, or extra fonts. Geist only (via next/font, `--font-geist-sans`).
- **Server components by default, one client island** — the only custom client JS is the theme toggle (`components/ui/animated-theme-toggler.tsx`, the MagicUI `AnimatedThemeToggler`, using phosphor icons and no `cn`/`lib/utils`) plus the no-flash inline script in `app/layout.tsx`. Everything else is server-rendered. The live clock and noise-texture overlay were removed (user request, performance); don't reintroduce client components without need.
- **No entrance/reveal animations.** BlurFade was removed for FCP/LCP reasons — JS-driven reveals SSR content with `opacity:0`, which delays paint until hydration. Do not reintroduce scroll reveals or anything that renders content hidden. Hover transitions (color/transform) are fine.
- Images are **sharp-cornered** (no border radius) and go through `next/image`.

## Architecture

- **All content lives in `app/data/resume.tsx`** (`data` export) — name, summary, taglines, contact/socials, work, projects, education. Components render from it; edit content there, not in components.
- `app/page.tsx` renders TopBar → Hero → WorkExperience → Projects → Education → Footer inside `<main class="max-w-[640px]">`.
- `app/layout.tsx` holds all SEO metadata, JSON-LD structured data, Vercel Analytics/Speed Insights, and the skip link.
- `app/globals.css` — Tailwind v4 CSS-first theming: light/dark palettes as CSS vars in `:root`/`.dark`, mapped to Tailwind tokens via `@theme inline` (+ `@custom-variant dark`); body base type (17px / weight 440 / -0.01em), inverted `::selection`, themed custom scrollbar, and the View Transitions CSS for the theme toggle.
- Design-exact values use Tailwind arbitrary classes (`text-[27px] font-[560] tracking-[-0.025em]`).
- Machine-readable resume: `app/llms.txt/route.ts` (llms.txt convention, generated from resume data). Also `manifest.ts`, `robots.ts`, `sitemap.ts`, `opengraph-image.tsx`, `twitter-image.tsx` — keep in sync with the palette/content.
- Icons: `@phosphor-icons/react` — import from `@phosphor-icons/react/ssr` in server components, root import in client components.
- shadcn registries configured in `components.json`: `@shadcn`, `@magicui`, `@aceternity`. Add components via `pnpm dlx shadcn@latest add <item>`.

## Known TODO

- The Résumé link URL in `app/data/resume.tsx` is a truncated placeholder (`document/d/1Ue.../`) awaiting the real Google Doc share link.
