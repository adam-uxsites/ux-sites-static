# AGENTS.md

Guidance for working in this repository. Read this file at the start of every session.

## What this repo is

- **uxsites.co.uk** — marketing site for UX Sites (managed WordPress hosting, web design, care plans, SEO for UK SMEs, based in Shropshire).
- The site lives in **`artifacts/uxsites`** (React + Vite + wouter SPA, prerendered statically, deployed to Cloudflare Pages via Wrangler).
- `scripts/` and root `package.json` are workspace-level helpers. `opencode-references/` holds local reference data (e.g. Google Search Console exports) and is gitignored.

## Key facts about the site implementation

- **Routing:** `artifacts/uxsites/src/App.tsx` (wouter `wouter` Switch). All route paths include a trailing slash, e.g. `/wordpress-care-plan/`.
- **Per-page SEO:** every page renders `<SEO ... />` from `src/components/seo/SEO.tsx` with `title`, `description`, canonical `url`, og tags and JSON-LD schema (`serviceSchema`, `breadcrumbSchema`, `faqSchema`, `articleSchema`, etc. in `src/lib/schemas.ts`). Canonical always uses the trailing-slash URL.
- **Prerendering:** `scripts/prerender.mjs` (in `artifacts/uxsites`) renders every route into `dist/public/<route>/index.html` plus a markdown version, after `vite build`. It also regenerates `sitemap.xml` from its `routes` + `blogSlugs` arrays.
  - **When you add a new route/page, you MUST also add it to the `routes` array in `scripts/prerender.mjs`** (and add blog slugs to `blogSlugs`). Otherwise the page won't be prerendered or sitemapped.
- **Blog posts:** defined in `artifacts/uxsites/src/data/blogPosts.ts` as markdown strings. Adding a post = add entry + add slug to prerender `blogSlugs`.
- **Deploy:** `pnpm --filter @workspace/uxsites run build` (runs typecheck via root `pnpm run typecheck`) then `pnpm --filter @workspace/uxsites run deploy` (wrangler pages deploy).
- **Redirects:** `artifacts/uxsites/public/_redirects` (TCP-style, ordered, tail rule `/* /index.html 200` is the SPA fallback). Cloudflare Pages Functions middleware in `artifacts/uxsites/functions/_middleware.ts` handles `Accept: text/markdown`.

## Ongoing project

On-going work = **build SEO / organic traffic** for uxsites.co.uk. The live plan, status, baseline data and the priority order are tracked in **`SEO-ROADMAP.md`** at the repo root. Always read it at session start, pick up unfinished items in order, and update it as tasks complete.

## Commands (run from repo root)

- Typecheck whole workspace: `pnpm run typecheck`
- Build (includes prerender): `pnpm --filter @workspace/uxsites run build`
- Fast build (no prerender): `pnpm --filter @workspace/uxsites run build:fast`
- Deploy: `pnpm --filter @workspace/uxsites run deploy`