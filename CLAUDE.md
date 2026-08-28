# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager: **pnpm** (required — lockfile is `pnpm-lock.yaml`).

```bash
pnpm dev          # Next.js dev server with Turbopack
pnpm build        # Production build
pnpm typecheck    # tsc --noEmit (strict config)
pnpm lint         # ESLint (strict typescript-eslint, type-aware)
pnpm lint:fix     # ESLint autofix
pnpm check        # typecheck + lint (run this before declaring work done)
```

Do not skip `pnpm check` after edits. Lint is type-aware and catches things `pnpm build` ignores.

## Architecture

### Single source of truth: `src/data/resume.tsx`

All portfolio content — name, description, work, projects, skills, social links, hackathons, education — lives in `DATA` in this one file. `src/app/layout.tsx`, `src/app/page.tsx`, the opengraph-image routes, and every section component read directly from `DATA`. To change site content, edit this file and nothing else.

`DATA` is declared `as const`, which matters:
- Empty arrays (`education`, `hackathons`) get inferred as `readonly never[]` unless explicitly cast (e.g. `[] as Array<{...}>`). Don't remove those casts.
- Conversely, if an array is populated at author-time (`projects`), `.length > 0` is statically true and becomes a `no-unnecessary-condition` lint error — don't wrap those sections in length guards.
- `src/app/page.tsx` guards genuinely-empty sections with `{DATA.x.length > 0 && <section>…</section>}` so empty arrays hide the section. Follow this pattern only for sections whose array is empty in the config.

### Section components (`src/components/section/*`)

Each reads from `DATA` and renders a single vertical section of the page:
- `work-section.tsx` — Accordion of `DATA.work`. **Description is rendered through `react-markdown`**, so bullet lists and inline links work in any entry's description.
- `projects-section.tsx` → `project-card.tsx` — Grid of `DATA.projects`. Each card is wrapped in a single `<Link>` (whole card is clickable). The per-project badge links live as absolutely-positioned siblings *outside* the main Link (nested `<a>` is invalid HTML). Card shows an OG image at top pulled from `image` field (typically an external URL from the linked site).
- `hackathons-section.tsx`, `contact-section.tsx` — straightforward reads.

There is no blog feature. It was removed (dead `content-collections`/MDX pipeline, `/blog` routes, `blog-section.tsx`, `src/lib/blog.ts`, `DATA.blog`) — don't reintroduce it without being asked.

### Adding a new project card

Project entries in `DATA.projects` have a specific shape that `project-card.tsx` expects:
```ts
{
  title, href, dates, active, description,
  technologies: string[],                       // → Badge pills
  links: [{ type, href, icon: <Icons.globe .../> }],  // → sub-link badges top-right
  image: "https://...",                         // → OG thumbnail, external URL is fine
  video: "",                                    // → if set, takes precedence over image
}
```
When pulling metadata from a real site, grab the `<meta property="og:image">` URL for the thumbnail.

### Skills icons

Skill icons are individual single-path SVG components in `src/components/ui/svgs/`. To add a new skill:
1. Pull the SVG from `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/<name>.svg` (MIT).
2. Wrap it as a `(props: SVGProps<SVGSVGElement>) => (...)` component in that directory.
3. Use `fill="currentColor"` for monochrome icons so they inherit text color, or a hex for brand-colored ones.
4. Import into `src/data/resume.tsx` and add to `skills`.

### Next.js specifics

- App Router, Next 16, React 19, Tailwind v4 (`@tailwindcss/postcss`).
- Path aliases: `@/*` → `./src/*`.
- Turbopack is the default for both dev and build.
- External image URLs (e.g. project card images) render through plain `<img>` tags, not `next/image`, so no `next.config` domain allow-list is needed. `avatarUrl` itself is a local file (`/avatar.webp`) served from `public/`, rendered through the shadcn `Avatar`/`AvatarImage` primitives with `object-cover` (needed since the source photo isn't square — don't drop that class, it prevents the image from stretching/distorting).

### Component layers

- `src/components/ui/*` — shadcn/ui primitives (Radix wrappers). Use `React.ComponentRef<typeof X>`, not the deprecated `ElementRef`.
- `src/components/magicui/*` — animated components (motion / framer-motion).
- `src/components/section/*` — page sections, all `DATA`-driven.
- `src/components/magicui/flickering-grid.tsx` — canvas ambient background used in `layout.tsx` (top banner), `github-section.tsx` (stat cards), and `contact-section.tsx`. All three intentionally pass `squareSize={2} gridGap={2}` (a finer grid than the component's own default) — that's the original design, not a perf mistake; don't "simplify" it back to the defaults, that visibly thins the effect out. `drawGrid` sets `fillStyle` once per frame and varies `ctx.globalAlpha` per square instead of building a new rgba string per square, so the fine grid doesn't cost a string allocation per cell per frame. Paints one static frame immediately on mount/resize (not just inside the animation loop, so it's never blank before scrolling into view), and always animates while on-screen (pauses via `IntersectionObserver` when off-screen, but does not check `prefers-reduced-motion` — that's deliberate, it's a decorative flourish, not requested to be gated).

### Strictness expectations

Both `tsconfig.json` and `eslint.config.mjs` are configured strictly. Notable rules that will bite:

- `noUncheckedIndexedAccess` — `arr[i]` is `T | undefined`. Guard or use `?.`.
- `@typescript-eslint/no-explicit-any` and the `no-unsafe-*` family — type things properly, don't paper over with `any`.
- `@typescript-eslint/prefer-nullish-coalescing` — prefer `??` over `||` for defaults (only use `||` when `0` / `""` should also trigger the fallback, and document why).
- `@typescript-eslint/no-unnecessary-condition` — don't guard against cases the types prove impossible. If a field is required on the type (or always-present in the `as const` data), don't wrap it in a truthy check.
- `@typescript-eslint/consistent-type-imports` with `inline-type-imports` — use `import { type Foo }` inline.
- `@typescript-eslint/array-type` is `array-simple` — `T[]` for simple types, `Array<T>` for complex object/union types.
- `@typescript-eslint/no-misused-promises` — don't pass `async` handlers directly to DOM event props like `onClick`; use a sync wrapper that kicks off the promise.

When you relax or override a rule, prefer fixing the code. Only adjust `eslint.config.mjs` when the rule genuinely doesn't fit the codebase's style.

## Copy and tone

A few editorial preferences have been established through iteration:
- **No em dashes** (`—`) in user-facing copy. Use periods, commas, parens, or colons.
- Tone is confident but understated. Avoid "building something crazy" / "stay tuned!!!" energy; prefer direct, specific sentences.
