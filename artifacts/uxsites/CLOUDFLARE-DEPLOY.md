# Deploying UX Sites to Cloudflare Pages

Everything is a static SPA — no server needed. Contact form submissions go through Formspree.

## Prerequisites

- [Node.js](https://nodejs.org/) and [pnpm](https://pnpm.io/installation)
- A [Cloudflare](https://dash.cloudflare.com/) account
- Authenticate wrangler: `pnpm exec wrangler login`

## 1. Build the site

```powershell
cd artifacts/uxsites
pnpm run build
```

Output goes to `dist/public/`.

## 2. Deploy to Cloudflare Pages (via Wrangler)

Wrangler is configured in `wrangler.toml` at the root of this package:

```toml
name = "uxsites"
compatibility_date = "2026-05-24"
pages_build_output_dir = "dist/public"

[pages]
build_command = "pnpm run build"
```

**First deploy** (creates the project):

```powershell
pnpm run deploy
```

**Subsequent deploys** (updates the existing project):

```powershell
pnpm run deploy
```

**Dry run** (preview without deploying):

```powershell
pnpm run deploy:dry-run
```

## 3. (Alternative) Deploy via Git

1. Push repo to GitHub/GitLab
2. **Cloudflare Dashboard → Pages → Create a project → Connect to Git**
3. Set:
   - **Project name:** `uxsites`
   - **Framework preset:** None (or Vite)
   - **Build command:** `cd artifacts/uxsites && pnpm run build`
   - **Build output directory:** `artifacts/uxsites/dist/public`
4. Deploy

Cloudflare will automatically read `wrangler.toml` from `artifacts/uxsites/wrangler.toml` when connected to Git.

## 4. SPA Routing

The `public/_redirects` file handles all client-side routes:

```
/*    /index.html   200
```

## 5. (Optional) Custom Domain

Add `uxsites.co.uk` and `www.uxsites.co.uk` under **Custom domains** in your Pages project.

## Verification

- `https://uxsites.co.uk/websites-for-builders` → loads the page, not 404
- `https://uxsites.co.uk/sitemap.xml` → contains all 90+ URLs
- Submit the contact form → you should receive the enquiry via Formspree
