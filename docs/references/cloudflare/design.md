---
version: alpha
name: "Cloudflare Developer Docs | Cloudflare Docs"
description: "Bright, soft contrast"
colors:
  background: "#fcfcfc"
  on-background: "#737373"
  surface: "#ffffffcc"
  on-surface-variant: "#181818"
  outline: "#e4e4e4"
  primary: "#ff5e1e"
  on-primary: "#1a1a1a"
typography:
  display:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: 500
    lineHeight: 1.1
  headline-lg:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: 500
    lineHeight: 1.1
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.38
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.43
  label-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.5
rounded:
  sm: 3px
  md: 4px
  lg: 6px
  xl: 8px
  full: 9999px
spacing:
  base: 12px
  xs: 1px
  sm: 2px
  md: 4px
  lg: 6px
  xl: 8px
components:
  button-primary:
    backgroundColor: "#ffffff"
    textColor: "#737373"
    typography: "{typography.label-sm}"
    rounded: "{rounded.xl}"
    height: 36px
  button-secondary:
    backgroundColor: transparent
    typography: "{typography.label-sm}"
    rounded: "{rounded.xl}"
    padding: 4px
    height: 32px
  card:
    backgroundColor: "{colors.surface}"
    rounded: 0px
---

# Design System: Cloudflare Developer Docs | Cloudflare Docs

> Extracted from [https://developers.cloudflare.com](https://developers.cloudflare.com) by brandmd

## Overview

**Visual character:** Bright, soft contrast; white background dominates with gray text and near-transparent vivid orange accents

**Density:** spacious. The layout uses a varied spacing scale.

**Motion:** Animation surfaces detected (scripted animation via requestAnimationFrame). The brand uses motion, so treat static tokens as a floor. Detection is presence-only; it does not describe the animations.

## Colors

Palette extracted from the live page. Token names below map to the machine-readable `colors` block above.

- **Black** (`#000000`): Primary text (dominant)
- **White** (`#fcfcfc`): Page background (dominant)
- **Light gray** (`#e4e4e4`): Divider / border (dominant)
- **Gray** (`#737373`): Secondary background (accent)
- **Near-transparent Vivid Orange** (`#ff5e1e33`): Overlay / scrim (accent)
- **Cream** (`#fffbf5`): Light text (on dark) (accent)
- **Vivid Orange** (`#ff5e1e`): Accent background (accent)
- **Near-transparent Vivid Blue** (`#0a95ff1a`): Overlay / scrim (accent)

## Typography

**Primary font:** Inter
**Secondary font:** JetBrains Mono

**Fonts by role:**

- Headings: Inter, JetBrains Mono
- Body: Inter

**Type scale:**

- Headings: 24px, 30px, 56px
- Body / UI: 14px, 15px, 16px, 18px, 20px
- Captions / Small: 11px, 12px, 13px

**Weights in use:** 400, 500, 600

**Line heights:** 24px, 19.5px, 20px, 20.5px, 16px, 26px, 25px, 17.5px, 16.5px, 33px

**Letter spacing:** 1.2px, -0.14px, 0.55px, 0.88px, -1.4px

## Layout

**Spacing scale:** 2px, 4px, 6px, 8px, 12px, 16px, 24px, 32px

**Base unit:** 4px grid — 83% of all weighted spacing values are multiples of 4.

## Elevation & Depth

Uses 4 shadow styles for layering and elevation:

- Level 1: `rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`
- Level 2: `oklch(0.92 0 0) 0px 0px 0px 1px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`
- Level 3: `oklab(0.92 0 0 / 0.7) 0px 0px 0px 1px`
- Level 4: `oklch(0.92 0 0) 0px 0px 0px 1px, oklch(0 0 0 / 0.04) 0px 1px 2px 0px`

## Shapes

**Shape language:** Subtle rounding on interactive elements.

**Border radii:** 3px, 4px, 6px, 8px, 9999px (pill)

## Components

Observed from the live DOM. Machine-readable component tokens are in the `components` block above.

### Buttons

- Background: `#ffffff`
- Text color: `#737373`
- Corner radius: 8px
- Height: 36px
- Padding: 0px 10px 0px 12px
- Font: 14px, weight 400

### Cards

- Background: `#ffffffcc`
- Corner radius: 0px
- Padding: 0px 0px 0px 0px

## Do's and Don'ts

- Do use a 4px grid for spacing
- Do use `#ffffff` for primary actions and CTAs
- Do stick to 3 font weights: 400, 500, 600
- Do use `Inter` as the primary typeface
- Don't introduce colors outside the palette above
- Don't mix fonts beyond Inter and JetBrains Mono
- Don't use border-radius values outside: 3px, 4px, 6px, 8px, 9999px (pill)

## Dark Mode Overrides

**Visual character:** Dark, high contrast; black background dominates with off-white text and near-transparent vivid orange accents

Observed differences from the light theme:

- Page background: `#fcfcfc` → `#141414`
- Text on background: `#737373` → `#f0e3de`
- Secondary text: `#181818` → `#a1a1a1`
- Dark background / footer: `#141414` (dark only)
- Divider / border: `#e4e4e4` → `#2a2a2a`
- Overlay / scrim: `#0a95ff1a` → `#ff5e1e33`
- Overlay / scrim: `#0a95ff1a` → `#0a95ff29`
- Secondary background: `#737373` → `#a1a1a1`
- Primary button background: `#ffffff` → `#25252580`

---

_This DESIGN.md was generated by [brandmd](https://github.com/yuvrajangadsingh/brandmd) and validates against the official [@google/design.md](https://github.com/google-labs-code/design.md) linter. Drop it into your project root and AI coding agents (Claude Code, Cursor, Gemini CLI) will use it to generate on-brand UI._
