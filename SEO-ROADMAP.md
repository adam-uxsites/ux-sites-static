# SEO Roadmap — uxsites.co.uk

Live plan for building SEO / organic traffic. Work through items **in order** (highest ROI first), mark `[x]` when done, add notes as you complete work. Read this at the start of every session.

## Baseline data (GSC, last 3 months, exported 2026-08-27)

- **Clicks:** 9 · **Impressions:** ~33,300 · **CTR:** 0.02% · **Avg position:** ~57
- Impressions grew ~3x over the window (~185/day late-May → ~400–600/day mid-Aug), but positions stayed ~54–58 → nearly zero clicks.
- 96% UK, 94% desktop. Rich results: none (Search Appearance export empty).
- Big-volume head terms (wordpress maintenance, managed wordpress hosting, website care plans) rank at pos 45–90 — too deep to click, dominated by national players.
- Footholds already near page 1 (pos 6–20): `seo audit shropshire` (6.5), `shropshire seo` (9.4), `search engine optimisation shropshire` (13.5), `shared vs managed wordpress hosting` (14.4), `website speed optimisation uk` (13.7), `conversion tracking setup uk` (15.6), `what is a wordpress care plan` (19.8 — the ONLY query that clicked), plus blog `local-seo-shropshire-businesses` (~pos 8–10) and `agent-ready` (~pos 6).
- GSC shows the same page twice (trailing-slash vs no-slash) for many URLs (e.g. `/wordpress-care-plan` 2,036 + `/wordpress-care-plan/` 5,261 impressions). The `/* → /index.html` fallback serves no-slash URLs as SPA root — must 301 no-slash → slash.
- `opencode-references/uxsites.co.uk-Performance-on-Search-2026-08-27/` holds the raw CSVs.

---

## Task 1 — Structural fixes (trailing-slash + keyword cannibalization)  ⭐ highest priority

- [x] **1a. Trailing-slash 301s** — done. `scripts/prerender.mjs` now generates a trailing-slash 301 per route into `dist/public/_redirects` (curated rules preserved above, `/* /index.html 200` fallback kept last), via `generateRedirects(routeList)`. 124 routes prerendered + `_redirects` regenerated; `public/_redirects` slimmed to curated rules only. Build:full regenerates it each deploy.
- [x] **1b. Maintenance cluster cannibalization.** Done:
  - `/wordpress-help/wordpress-maintenance/` → now clearly informational: title/H1 "What Is WordPress Maintenance? A Complete Checklist", definitional intro section, intro answers "what is wordpress maintenance"; hero + "Too busy" CTAs now funnel to `/wordpress-maintenance/`; added "Maintenance Service vs Care Plan" clarification card linking both commercial pages.
  - `/wordpress-maintenance/` → added "monthly WordPress maintenance checklist" in-body link to the guide + guide card in RelatedPages (reciprocal linking).
  - `/wordpress-care-plan/` unchanged (already distinct + best positioned @51).
- [x] **1c. Hosting cluster cannibalization.** Done — differentiated the host cluster so `/managed-wordpress-hosting/` (service) is the sole target of `managed wordpress hosting`:
  - `/what-is-managed-wordpress-hosting/` guide: hero CTA → `/managed-wordpress-hosting/`.
  - `/whats-included-managed-wordpress-hosting/`: hero CTA → `/managed-wordpress-hosting/#pricing`.
  - `/fully-managed-wordpress-hosting/`: added link to `/managed-wordpress-hosting/` in "What We Take Care Of".
  - `/managed-wordpress-hosting/` RelatedPages now links both guides (hub-and-spoke).
- [x] **1d. Security cannibalization.** Done — `/wordpress-help/wordpress-security/` (guide) hero CTA → `/wordpress-security/` (managed security service); corrected "40%" → "43%" stat.

**Notes / split URLs seen in GSC:** `/wordpress-care-plan`, `/common-wordpress-errors`, `/websites-for-consultants`, `/websites-for-decorators`, `/websites-for-pressure-washers`, `/small-business-websites`, `/wordpress-support-shropshire`, `/wordpress-backup-recovery`, `/websites-for-smes`, `/wordpress-hosting-whitchurch`, `/wordpress-hosting-welshpool`, `/wordpress-hosting-ellesmere`, `/wordpress-hosting-llangollen`, `/about`, `/contact`, `/websites-for-gardeners`, `/websites-for-marketing-consultants`, `/wordpress-hosting-shropshire`, `/website-support`, `/blog/diy-websites-vs-professional-in-2025`, `/blog/local-seo-shropshire-businesses`, `/blog/small-business-seo-guide`, `/blog/shopify-vs-woocommerce-uk`, `/blog/website-speed-optimisation-guide`, `/blog/why-your-wordpress-website-keeps-breaking`, `/blog/wordpress-security-guide`, `/case-studies/conveyancing-fairy`, and any future split URLs.

## Task 2 — Win the "in-reach" queries (already pos 6–20) by aligning page titles/H1s to the exact query

- [x] **2a. `shared vs managed wordpress hosting`** (pos 14.4) + `managed wordpress hosting vs shared hosting` (26.9) → `/managed-wordpress-hosting-vs-shared-hosting/` H1 → "Shared vs Managed WordPress Hosting - The Real Differences"; primary CTA → `/managed-wordpress-hosting/`, secondary → `#comparison`.
- [x] **2b. `website speed optimisation uk`** (pos 13.7) → `/website-speed-optimisation/` title/H1 → "Website Speed Optimisation UK | WordPress Performance | UX Sites" / "Website Speed Optimisation for UK Businesses"; description now mentions UK.
- [x] **2c. `conversion tracking setup uk`** (pos 15.6) → `/conversion-tracking-setup/` title/H1 → "Conversion Tracking Setup UK | UX Sites" / "Conversion Tracking Setup for UK Businesses"; description mentions UK.
- [x] **2d. `what is a wordpress care plan`** (pos 19.8, only clicking query) → `/wordpress-care-plan/` section header → "What Is a WordPress Care Plan?" with definitional intro.

## Task 3 — Create SEO services page (site has NO dedicated SEO page but ranks #6–14 for "seo shropshire" terms)

- [x] **Done** — new page `/seo-services-shropshire/` targeting `shropshire seo`, `seo audit shropshire`, `search engine optimisation shropshire`, `local seo shropshire`. Follows the `/web-design-shropshire/` pattern. "SEO That Runs Itself" section ties into care-plan offer. Fully wired: App.tsx route, prerender `routes` entry, sitemap page, nav (desktop dropdown + mobile), footer.

## Task 4 — New content (mid-tail, where the site has already shown rankability)

- [x] **4a. New page `/website-care-plans/`** — "website care plans" cluster is ~6.7k impressions @ ~60 with no dedicated page. Page created, routed, prerendered. Title "Website Care Plans | Ongoing WordPress Support | UX Sites", H1 "Website Care Plans - Everything in One Monthly Plan"; funnels to `/wordpress-care-plan/` offerings.
- [x] **4b. Expand `/wordpress-help/` guide hub** — added `wordpress-help/wordpress-backup-guide`, `wordpress-help/wordpress-not-loading`, `wordpress-help/wordpress-404-errors`, `wordpress-help/wordpress-malware-removal`. All four created, routed, prerendered, and linked as cards on `/wordpress-help/` hub + sitemap.
- [x] **4c. `/websites-for-solicitors/`** — created, routed, prerendered. Title "Websites for Solicitors | Law Firm Web Design | UX Sites". (Lives alongside `/websites-for-lawyers/`.)
- [x] **4d. Shropshire town pages** — created, routed, prerendered: `/web-design-bridgnorth/`, `/web-design-much-wenlock/`, `/web-design-shrewsbury/`, following `/web-design-oswestry/`. Town-specific copy; Bridgnorth + Much Wenlock link local `/wordpress-hosting-shropshire/`, Shrewsbury links `/wordpress-hosting-shrewsbury/`.
- [x] **4e. "Monthly WordPress maintenance checklist"** — covered by the `/wordpress-help/wordpress-maintenance/` guide (now titled "What Is WordPress Maintenance? Full Checklist" with checklist body + maintenance service funnel). No separate page needed.

## Task 5 — Tactical hygiene

- [x] **5a. Refresh 2025-dated blog posts** — updated all seven 2025-dated posts to August 2026 dates; freshened visible titles for `diy-websites-vs-professional-in-2025` ("...in 2026"), `magento-to-shopify-migration-2025` ("Migration 2026..."), `how-much-does-a-wordpress-website-cost-in-2025` ("...in 2026?"); slugs/URLs unchanged (no redirects needed).
- [x] **5b. Hub-and-spoke internal linking** — added "Managed WordPress Hosting / WordPress Maintenance / WordPress Care Plans / Website Care Plans for Your Industry" blocks (RelatedPages) to the four commercial pillars, distributing internal links to all 42 industry pages (9/9/12/12, zero duplicates). Each industry page already links back up to the pillars.
- [ ] **5c. Re-export GSC data periodically** and update the baseline block above to measure progress.

---

## Bonus fix (found during Task 4 verification)

- [x] **Prerender published the homepage `<title>` on every page** — react-helmet-async appends stale `<title>`/meta tags during SPA lazy routing and `deduplicateHeadTags` kept the *last* occurrence. Every static page shipped with the homepage title ("UX Sites | Managed WordPress Hosting & Web Design…"). Fixed: dedup now keeps the **first** occurrence (browser also treats the first `<title>` as `document.title`). Verified all 134 routes render correct per-page titles. This is a high-priority fix — arguably the biggest single SEO win in this pass.

---

## Priority rationale

Clicks ≈ 0 because everything ranks pos 45–90. Rank improvements compound via position; nearest wins (pos 6–20) and de-duplication/cannibalization fixes give the fastest, cheapest ranking gains. New content targets mid-tail terms Google has already shown the site exists for, avoiding unwinnable head terms.