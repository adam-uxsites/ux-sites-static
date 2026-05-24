# Deploying UX Sites to Cloudflare Pages

Everything is a static SPA — no server needed. Contact form submissions go through Formspree.

## 1. Build the site

```powershell
cd artifacts/uxsites
npm run build
```

Output goes to `dist/public/`.

## 2. Deploy to Cloudflare Pages

**Option A: Via Git (auto-deploys on push)**

1. Push repo to GitHub/GitLab
2. **Cloudflare Dashboard → Pages → Create a project → Connect to Git**
3. Set:
   - **Project name:** `uxsites`
   - **Framework preset:** None (or Vite)
   - **Build command:** `cd artifacts/uxsites && npm run build`
   - **Build output directory:** `artifacts/uxsites/dist/public`
4. Deploy

**Option B: Direct Upload**

Upload the contents of `artifacts/uxsites/dist/public/` via the Cloudflare Pages dashboard.

## 3. SPA Routing

The `public/_redirects` file handles all client-side routes:

```
/*    /index.html   200
```

## 4. (Optional) Custom Domain

Add `uxsites.co.uk` and `www.uxsites.co.uk` under **Custom domains** in your Pages project.

## Verification

- `https://uxsites.co.uk/websites-for-builders` → loads the page, not 404
- `https://uxsites.co.uk/sitemap.xml` → contains all 90+ URLs
- Submit the contact form → you should receive the enquiry via Formspree
