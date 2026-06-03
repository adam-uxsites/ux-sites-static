import { chromium } from 'playwright';
import { execSync, spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Start vite dev server
console.log('Starting Vite dev server...');
const server = spawn('npx.cmd', ['vite', '--config', 'vite.config.ts', '--host', '127.0.0.1', '--port', '5199'], {
  cwd: __dirname,
  stdio: ['ignore', 'pipe', 'pipe'],
  shell: true
});

let serverOutput = '';
server.stdout.on('data', d => { serverOutput += d.toString(); });
server.stderr.on('data', d => { serverOutput += d.toString(); });

// Wait for server to be ready
await new Promise((resolve, reject) => {
  const timeout = setTimeout(() => reject(new Error('Server start timeout')), 15000);
  const check = () => {
    if (serverOutput.includes('http://127.0.0.1:5199') || serverOutput.includes('Local:')) {
      clearTimeout(timeout);
      resolve();
    } else {
      setTimeout(check, 200);
    }
  };
  check();
});

console.log('Server started. Testing...');

try {
  const browser = await chromium.launch({headless:true,args:['--no-sandbox']});
  const page = await browser.newPage();
  page.on('console', msg => {
    if (msg.type()==='error'||msg.type()==='warning') console.log(`[${msg.type()}] ${msg.text()}`);
  });
  page.on('pageerror', err => console.log('[pageerror]', err.message));
  
  await page.goto('http://127.0.0.1:5199/', {waitUntil:'commit'});
  await page.waitForSelector('#root > *', {timeout:15000});
  await page.waitForLoadState('networkidle');
  await page.evaluate(() => new Promise(r => setTimeout(r, 500)));
  
  const html = await page.content();
  console.log('=== Dev server results ===');
  console.log('Full HTML length:', html.length);
  console.log('Has 404:', html.includes('Page Not Found'));
  console.log('Has Home content:', html.includes('Managed Hosting'));
  console.log('Has ErrorBoundary:', html.includes('Something went wrong'));
  
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (bodyMatch) {
    const body = bodyMatch[1];
    console.log('Body (first 1000 chars):', body.substring(0, 1000));
    // Check for header/footer
    console.log('Has header:', body.includes('site-header') || body.includes('SiteHeader'));
    console.log('Has footer:', body.includes('site-footer') || body.includes('SiteFooter'));
  }
  
  await browser.close();
} catch(e) {
  console.error('Error:', e.message);
}

server.kill();
process.exit(0);
