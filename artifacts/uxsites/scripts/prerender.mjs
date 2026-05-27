import { chromium } from "playwright";
import { preview } from "vite";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const SITE_URL = "https://uxsites.co.uk";

const routes = [
  "/",
  "/managed-wordpress-hosting",
  "/website-support",
  "/new-website",
  "/existing-website",
  "/contact",
  "/blog",
  "/fully-managed-wordpress-hosting",
  "/managed-wordpress-hosting-cost-uk-2026",
  "/wordpress-maintenance-cost-uk",
  "/wordpress-care-plan",
  "/wordpress-migration-to-managed-hosting",
  "/common-wordpress-errors",
  "/managed-wordpress-hosting-vs-shared-hosting",
  "/whats-included-managed-wordpress-hosting",
  "/what-is-managed-wordpress-hosting",
  "/managed-hosting-small-businesses",
  "/wordpress-hosting-shropshire",
  "/wordpress-hosting-oswestry",
  "/wordpress-hosting-st-martins",
  "/wordpress-hosting-chirk",
  "/wordpress-hosting-gobowen",
  "/wordpress-hosting-shrewsbury",
  "/wordpress-hosting-wrexham",
  "/wordpress-hosting-ruabon",
  "/wordpress-hosting-ellesmere",
  "/wordpress-hosting-llangollen",
  "/wordpress-hosting-whitchurch",
  "/wordpress-hosting-welshpool",
  "/wordpress-security",
  "/wordpress-backup-recovery",
  "/wordpress-help",
  "/wordpress-help/wordpress-slow",
  "/wordpress-help/wordpress-maintenance",
  "/wordpress-help/wordpress-hacked",
  "/wordpress-help/wordpress-security",
  "/wordpress-help/wordpress-update-issues",
  "/websites-for-consultants",
  "/websites-for-marketing-consultants",
  "/websites-for-legal-consultants",
  "/websites-for-business-consultants",
  "/websites-for-builders",
  "/websites-for-electricians",
  "/websites-for-plumbers",
  "/websites-for-decorators",
  "/websites-for-joiners",
  "/websites-for-scaffolders",
  "/websites-for-roofers",
  "/websites-for-air-conditioning-fitters",
  "/websites-for-solar-panel-fitters",
  "/websites-for-pressure-washers",
  "/websites-for-hairdressers",
  "/websites-for-lawyers",
  "/websites-for-finance-advisors",
  "/websites-for-estate-agents",
  "/websites-for-restaurants",
  "/websites-for-takeaways",
  "/websites-for-developers",
  "/websites-for-gardeners",
  "/websites-for-landscapers",
  "/websites-for-retail-shops",
  "/websites-for-charities",
  "/websites-for-schools",
  "/websites-for-tutors",
  "/websites-for-smes",
  "/websites-for-medium-businesses",
  "/websites-for-butchers",
  "/websites-for-facial-aesthetics",
  "/websites-for-tanning-studios",
  "/websites-for-nail-studios",
  "/websites-for-tattoo-studios",
  "/websites-for-local-groups",
  "/websites-for-cleaners",
  "/websites-for-nursing-homes",
  "/websites-for-coffee-shops",
  "/websites-for-cafes",
  "/websites-for-jewellers",
  "/websites-for-manufacturers",
  "/web-design-shropshire",
  "/small-business-websites",
  "/wordpress-maintenance",
  "/website-speed-optimisation",
  "/privacy-policy",
  "/terms-of-service",
  "/thank-you",
  "/sitemap",
  "/instant-site-quote",
  "/downtime-hack-calculator",
  "/work",
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
];

blogSlugs.forEach(slug => routes.push(`/blog/${slug}`));

function generateSitemap(allRoutes) {
  const urls = allRoutes.map(route => {
    const escaped = route.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    return `  <url>\n    <loc>${SITE_URL}${escaped}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>${route === "/" ? "1.0" : "0.7"}</priority>\n  </url>`;
  }).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
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

  for (let i = 0; i < total; i++) {
    const route = routes[i];
    const page = await context.newPage();
    try {
      await page.goto(`${address}${route}`, { waitUntil: "commit" });
      await page.waitForSelector("#root > *", { timeout: 15000 });
      await page.waitForLoadState("networkidle");
      await page.evaluate(() => new Promise(r => setTimeout(r, 500)));

      const html = await page.content();

      const filePath = route === "/"
        ? path.join(root, "dist/public/index.html")
        : path.join(root, "dist/public", route.slice(1), "index.html");

      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      fs.writeFileSync(filePath, html, "utf-8");
      success++;
      process.stdout.write(`\r  ✓ [${i + 1}/${total}] ${route}                  `);
    } catch (err) {
      failed++;
      process.stdout.write(`\r  ✗ [${i + 1}/${total}] ${route} (${err.message})`);
    }
    await page.close();
  }

  console.log(`\n\nDone: ${success} succeeded, ${failed} failed`);

  // Write sitemap
  const sitemap = generateSitemap(routes);
  fs.writeFileSync(path.join(root, "dist/public/sitemap.xml"), sitemap, "utf-8");
  console.log(`Sitemap written to dist/public/sitemap.xml (${routes.length} URLs)`);

  await browser.close();
  server.httpServer.close();
}

prerender().catch(err => { console.error(err); process.exit(1); });
