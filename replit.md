# 正念咖啡 · Mindful Coffee München

慕尼黑静心协会（Mindful Peace e.V.）公益咖啡项目网站。A wabi-sabi aesthetic static website for the Mindful Coffee community project in Munich.

## Run & Operate

- `pnpm --filter @workspace/mindful-coffee run dev` — run the frontend (Vite dev server)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, TailwindCSS v4
- Fonts: Cormorant Garamond (serif) + IBM Plex Mono (monospace) via Google Fonts
- API: Express 5 (backend, currently only /healthz)
- No database needed for the current static site

## Where things live

- `artifacts/mindful-coffee/src/pages/home.tsx` — main single-page component (all content + all 3 languages)
- `artifacts/mindful-coffee/src/index.css` — wabi-sabi CSS theme (colors, animations, utilities)
- `artifacts/mindful-coffee/index.html` — HTML entry with Google Fonts
- `attached_assets/` — all photos and documents (accessible via `@assets/` alias in Vite)

## Architecture decisions

- All trilingual content (zh/en/de) lives in a single `t` object inside `home.tsx` — easy to maintain, no i18n library needed for a simple static site
- Form data is stored in `localStorage` under key `mindfulcoffee_signups` — zero backend needed, suitable for GitHub Pages
- Images imported directly via `@assets/` Vite alias pointing to `attached_assets/`
- Wabi-sabi color palette: rice-white `hsl(38 28% 95%)`, moss green `hsl(148 20% 29%)`, charcoal `hsl(0 0% 15%)`
- Scroll-triggered reveal animations use IntersectionObserver (pure CSS + JS, no library)

## Product

Five-section single-page website:
1. **Hero** — full-screen image with animated 留白一刻 tagline and CTA buttons
2. **Philosophy (理念)** — quotes from Venerable Master Jiqun on mindfulness and coffee
3. **About (关于我们)** — Mindful Peace e.V. München, MPI, and Master Jiqun's background
4. **Activities (活动)** — workshop description, frequency, audience, session details
5. **Articles (文章)** — three essay excerpts from the provided content collection
6. **Join (报名)** — signup form with localStorage persistence

Features: zh/en/de language switcher, scroll nav highlighting, fade-in animations, fully responsive.

## User preferences

- Design style: Japanese wabi-sabi (侘寂) aesthetic
- Colors: rice-white background, charcoal + moss green
- Typography: Cormorant Garamond serif + IBM Plex Mono
- Minimal whitespace, slow fade-in scroll animations
- Three-language support: 中文 / English / Deutsch

## Gotchas

- German typographic quotes „..." must be escaped as \u201e and \u201c in JS string literals — Babel parser chokes on them inside double-quoted strings
- `@assets/` alias in vite.config.ts points to `/attached_assets/` — use this for all image imports
- Form data stored locally only (localStorage) — suitable for GitHub Pages static hosting

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
- To export as a GitHub Pages static site: run `pnpm --filter @workspace/mindful-coffee run build`, then deploy `artifacts/mindful-coffee/dist/public/`
