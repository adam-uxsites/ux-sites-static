import { chromium } from "playwright";
import { preview } from "vite";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import TurndownService from "turndown";

const turndownService = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
});

turndownService.remove(["nav", "footer", "script", "style", "noscript", "svg"]);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const SITE_URL = "https://uxsites.co.uk";

const routes = [
  "/",
  "/managed-wordpress-hosting/",
  "/website-support/",
  "/new-website/",
  "/existing-website/",
  "/contact/",
  "/about/",
  "/blog/",
  "/fully-managed-wordpress-hosting/",
  "/managed-wordpress-hosting-cost-uk-2026/",
  "/wordpress-maintenance-cost-uk/",
  "/wordpress-care-plan/",
  "/wordpress-care-plan-pro/",
  "/wordpress-migration-to-managed-hosting/",
  "/migration-guide/",
  "/common-wordpress-errors/",
  "/managed-wordpress-hosting-vs-shared-hosting/",
  "/whats-included-managed-wordpress-hosting/",
  "/what-is-managed-wordpress-hosting/",
  "/managed-hosting-small-businesses/",
  "/wordpress-hosting-shropshire/",
  "/wordpress-hosting-oswestry/",
  "/wordpress-hosting-st-martins/",
  "/wordpress-hosting-chirk/",
  "/wordpress-hosting-gobowen/",
  "/wordpress-hosting-shrewsbury/",
  "/wordpress-hosting-wrexham/",
  "/wordpress-hosting-ruabon/",
  "/wordpress-hosting-ellesmere/",
  "/wordpress-hosting-llangollen/",
  "/wordpress-hosting-whitchurch/",
  "/wordpress-hosting-welshpool/",
  "/wordpress-security/",
  "/wordpress-backup-recovery/",
  "/wordpress-help/",
  "/wordpress-help/wordpress-slow/",
  "/wordpress-help/wordpress-maintenance/",
  "/wordpress-help/wordpress-hacked/",
  "/wordpress-help/wordpress-security/",
  "/wordpress-help/wordpress-update-issues/",
  "/wordpress-help/wordpress-backup-guide/",
  "/wordpress-help/wordpress-not-loading/",
  "/wordpress-help/wordpress-404-errors/",
  "/wordpress-help/wordpress-malware-removal/",
  "/websites-for-consultants/",
  "/websites-for-marketing-consultants/",
  "/websites-for-legal-consultants/",
  "/websites-for-business-consultants/",
  "/websites-for-builders/",
  "/websites-for-electricians/",
  "/websites-for-plumbers/",
  "/websites-for-decorators/",
  "/websites-for-joiners/",
  "/websites-for-scaffolders/",
  "/websites-for-roofers/",
  "/websites-for-air-conditioning-fitters/",
  "/websites-for-solar-panel-fitters/",
  "/websites-for-pressure-washers/",
  "/websites-for-hairdressers/",
  "/websites-for-lawyers/",
  "/websites-for-solicitors/",
  "/websites-for-finance-advisors/",
  "/websites-for-estate-agents/",
  "/websites-for-restaurants/",
  "/websites-for-takeaways/",
  "/websites-for-developers/",
  "/websites-for-gardeners/",
  "/websites-for-landscapers/",
  "/websites-for-retail-shops/",
  "/websites-for-charities/",
  "/websites-for-schools/",
  "/websites-for-tutors/",
  "/websites-for-smes/",
  "/websites-for-medium-businesses/",
  "/websites-for-butchers/",
  "/websites-for-facial-aesthetics/",
  "/websites-for-tanning-studios/",
  "/websites-for-nail-studios/",
  "/websites-for-tattoo-studios/",
  "/websites-for-local-groups/",
  "/websites-for-cleaners/",
  "/websites-for-nursing-homes/",
  "/websites-for-coffee-shops/",
  "/websites-for-cafes/",
  "/websites-for-jewellers/",
  "/websites-for-manufacturers/",
  "/web-design-shropshire/",
  "/web-design-oswestry/",
  "/web-design-bridgnorth/",
  "/web-design-much-wenlock/",
  "/web-design-shrewsbury/",
  "/seo-services-shropshire/",
  "/website-care-plans/",
  "/wordpress-support-shropshire/",
  "/website-maintenance-shropshire/",
  "/small-business-websites/",
  "/wordpress-maintenance/",
  "/website-speed-optimisation/",
  "/privacy-policy/",
  "/terms-of-service/",
  "/thank-you/",
  "/sitemap/",
  "/instant-site-quote/",
  "/google-analytics-setup/",
  "/free-ga4-review/",
  "/conversion-tracking-setup/",
  "/website-ux-audit/",
  "/resources/",
  "/resources/website-stats-quiz/",

  "/downtime-hack-calculator/",
  "/case-studies/",
  "/case-studies/kingman-property-law/",
  "/case-studies/conveyancing-fairy/",
  "/case-studies/rhind-speech-therapy/",
];

const blogSlugs = [
  "5-signs-your-website-needs-a-rebuild",
  "core-web-vitals-speed-conversion",
  "diy-websites-vs-professional-in-2025",
  "how-much-does-a-wordpress-website-cost-in-2025",
  "local-seo-shropshire-businesses",
  "magento-to-shopify-migration-2025",
  "managed-wordpress-hosting-shropshire-wrexham-local-support-2026",
  "managed-wordpress-hosting-small-business-2026",
  "web-design-shropshire-chester",
  "responsive-web-design-uk",
  "shopify-vs-woocommerce-uk",
  "small-business-seo-guide",
  "website-redesign-uk",
  "website-speed-optimisation-guide",
  "why-managed-wordpress-hosting",
  "why-your-wordpress-website-keeps-breaking",
  "wordpress-security-essentials",
  "wordpress-security-guide",
  "agent-ready-website-level-5",
  "website-interaction-tracking",
];

blogSlugs.forEach(slug => routes.push(`/blog/${slug}/`));

const NOINDEX_ROUTES = new Set([
  "/thank-you/",
  "/privacy-policy/",
  "/terms-of-service/",
  "/sitemap/",
]);

/**
 * Generate `_redirects` for Cloudflare Pages.
 * Preserves curated rules from public/_redirects (non-`/*` lines), then injects a
 * trailing-slash 301 for every route in `routes` (so no-slash URLs are never served
 * as the SPA fallback), and keeps the `/*` SPA fallback last.
 */
function generateRedirects(routeList) {
  const srcPath = path.join(root, "public/_redirects");
  const src = fs.readFileSync(srcPath, "utf-8");
  const srcLines = src.split(/\r?\n/);

  const comments = srcLines.filter(l => l.trim().startsWith("#"));
  const rules = srcLines.filter(l => l.trim() !== "" && !l.trim().startsWith("#"));
  const curated = rules.filter(l => !l.includes("/*"));
  const fallback = rules.filter(l => l.includes("/*"));

  const slashRules = routeList
    .filter(route => route !== "/")
    .map(route => `${route.replace(/\/+$/, "")}  ${route}  301`);

  return [
    "# Do not edit this file directly - generated by scripts/prerender.mjs on build.",
    "# Add new pages/blogs to the `routes` + `blogSlugs` arrays in scripts/prerender.mjs;",
    "# their trailing-slash 301s are added here automatically.",
    "",
    ...comments,
    ...curated,
    ...slashRules,
    "",
    fallback.join(""),
    "",
  ].join("\n");
}

function generateSitemap(allRoutes) {
  const urls = allRoutes
    .filter(route => !NOINDEX_ROUTES.has(route))
    .map(route => {
    const urlPath = route === "/" ? "/" : route.replace(/\/+$/, "") + "/";
    const escaped = urlPath.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    return `  <url>\n    <loc>${SITE_URL}${escaped}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>${route === "/" ? "1.0" : "0.7"}</priority>\n  </url>`;
  }).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
}

/**
 * Deduplicate head tags that react-helmet-async sometimes fails to clean up
 * during client-side SPA routing, when it appends a fresh set of tags without
 * removing the previous route's. The CURRENT page's tags are always the FIRST
 * occurrence — later ones are stale leftovers (a browser also treats the first
 * <title> as document.title). Remove every tag but the first occurrence.
 */
function deduplicateHeadTags(html) {
  // Tag selectors to deduplicate: [tagPattern, removeAllButFirst]
  const rules = [
    // <title> — keep first
    { pattern: /<title[^>]*>[\s\S]*?<\/title>/gi },
    // <meta name="description" ...>
    { pattern: /<meta[^>]+name=["']description["'][^>]*\/?>/gi },
    // <meta property="og:title" ...>
    { pattern: /<meta[^>]+property=["']og:title["'][^>]*\/?>/gi },
    // <meta property="og:description" ...>
    { pattern: /<meta[^>]+property=["']og:description["'][^>]*\/?>/gi },
    // <meta property="og:url" ...>
    { pattern: /<meta[^>]+property=["']og:url["'][^>]*\/?>/gi },
    // <meta name="twitter:title" ...>
    { pattern: /<meta[^>]+name=["']twitter:title["'][^>]*\/?>/gi },
    // <meta name="twitter:description" ...>
    { pattern: /<meta[^>]+name=["']twitter:description["'][^>]*\/?>/gi },
    // <meta property="og:image" ...>
    { pattern: /<meta[^>]+property=["']og:image["'][^>]*\/?>/gi },
    // <meta name="twitter:image" ...>
    { pattern: /<meta[^>]+name=["']twitter:image["'][^>]*\/?>/gi },
    // <meta property="og:type" ...>
    { pattern: /<meta[^>]+property=["']og:type["'][^>]*\/?>/gi },
    // <meta property="og:site_name" ...>
    { pattern: /<meta[^>]+property=["']og:site_name["'][^>]*\/?>/gi },
    // <meta name="twitter:card" ...>
    { pattern: /<meta[^>]+name=["']twitter:card["'][^>]*\/?>/gi },
    // <link rel="canonical" ...>
    { pattern: /<link[^>]+rel=["']canonical["'][^>]*\/?>/gi },
  ];

  let result = html;
  for (const { pattern } of rules) {
    const matches = result.match(pattern);
    if (matches && matches.length > 1) {
      const first = matches[0];
      result = result.replace(pattern, "");
      result = result.replace("</head>", `${first}</head>`);
    }
  }
  return result;
}

async function prerender() {
  const server = await preview({
    root,
    preview: { port: 4199, host: "127.0.0.1" },
    build: { outDir: "dist/public" },
  });

  const address = server.resolvedUrls?.local?.[0];
  if (!address) {
    throw new Error("Preview server failed to start");
  }


  const total = routes.length;
  console.log(`Prerendering ${total} routes...`);

  const browser = await chromium.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
  });

  let success = 0;
  let failed = 0;

  // Collect route-specific console/page errors
  const routeErrors = new Map();

  for (let i = 0; i < total; i++) {
    const route = routes[i];
    const page = await context.newPage();
    const pageConsoleErrors = [];

    page.on("console", msg => {
      const txt = msg.text();
      if (msg.type() === "error" || msg.type() === "warning") {
        pageConsoleErrors.push(`[${msg.type()}] ${txt}`);
      }
    });

    page.on("pageerror", err => {
      pageConsoleErrors.push(`[pageerror] ${err.message}\n${err.stack}`);
    });

    try {
      const fullUrl = (address.endsWith('/') ? address.slice(0, -1) : address) + route;

      await page.goto(fullUrl, { waitUntil: "load" });
      await page.waitForSelector("#root > *", { timeout: 15000 });
      await page.waitForLoadState("networkidle");
      await page.evaluate(() => new Promise(r => setTimeout(r, 1000)));

      let html = await page.content();

      // Deduplicate head tags: react-helmet-async occasionally leaves stale tags from
      // previous route renders. Keep only the LAST occurrence of each tag type.
      html = deduplicateHeadTags(html);
      
      const filePath = route === "/"
        ? path.join(root, "dist/public/index.html")
        : path.join(root, "dist/public", route.slice(1), "index.html");

      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      fs.writeFileSync(filePath, html, "utf-8");

      // Generate markdown version of the page for Accept: text/markdown
      const mdFilePath = filePath.replace(/\.html$/, ".md");
      const markdown = turndownService.turndown(html);
      fs.writeFileSync(mdFilePath, markdown, "utf-8");

      success++;
      process.stdout.write(`\r  ? [${i + 1}/${total}] ${route}                  `);
    } catch (err) {
      failed++;
      process.stdout.write(`\r  ? [${i + 1}/${total}] ${route} (${err.message})`);
    }

    if (pageConsoleErrors.length > 0) {
      routeErrors.set(route, [...pageConsoleErrors]);
    }

    await page.close();
  }

  // Report any captured console/page errors
  if (routeErrors.size > 0) {
    console.log(`\n\n? Console/Page Errors captured for ${routeErrors.size} route(s):\n`);
    let errorCount = 0;
    for (const [route, errors] of routeErrors) {
      console.log(`  --- ${route} ---`);
      for (const err of errors) {
        errorCount++;
        console.log(`    ${err}`);
      }
    }
    console.log(`\nTotal errors/warnings: ${errorCount}`);
  } else {
    console.log(`\n\n? No console errors or warnings captured for any route.`);
  }

  console.log(`\nDone: ${success} succeeded, ${failed} failed`);

  // Write sitemap
  const sitemap = generateSitemap(routes);
  fs.writeFileSync(path.join(root, "dist/public/sitemap.xml"), sitemap, "utf-8");
  console.log(`Sitemap written to dist/public/sitemap.xml (${routes.length} URLs)`);

  // Write _redirects (curated rules + generated trailing-slash 301s + SPA fallback)
  const redirects = generateRedirects(routes);
  fs.writeFileSync(path.join(root, "dist/public/_redirects"), redirects, "utf-8");
  console.log(`_redirects written to dist/public/_redirects (${routes.length} trailing-slash rules)`);

  await browser.close();
  server.httpServer.close();
}

prerender().catch(err => { console.error(err); process.exit(1); });
