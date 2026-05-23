import { chromium } from 'playwright';
const browser = await chromium.launch();

// Kill existing dev server port check handled by reuse

const desktop = await browser.newPage();
await desktop.setViewportSize({ width: 1440, height: 900 });
await desktop.goto('http://localhost:3001', { waitUntil: 'networkidle' });
await desktop.waitForTimeout(2500);

// Hero
await desktop.screenshot({ path: '/tmp/cyber-hero.png', fullPage: false });

// Cards
await desktop.evaluate(() => window.scrollTo(0, 950));
await desktop.waitForTimeout(900);
await desktop.screenshot({ path: '/tmp/cyber-cards.png', fullPage: false });

// Missions
await desktop.evaluate(() => window.scrollTo(0, 1900));
await desktop.waitForTimeout(900);
await desktop.screenshot({ path: '/tmp/cyber-missions.png', fullPage: false });

// Missions second view (last 2 cards)
await desktop.evaluate(() => window.scrollTo(0, 2700));
await desktop.waitForTimeout(900);
await desktop.screenshot({ path: '/tmp/cyber-missions2.png', fullPage: false });

// Builders wall
await desktop.evaluate(() => window.scrollTo(0, 3600));
await desktop.waitForTimeout(900);
await desktop.screenshot({ path: '/tmp/cyber-wall.png', fullPage: false });

// CTA + footer
await desktop.evaluate(() => window.scrollTo(0, 99999));
await desktop.waitForTimeout(900);
await desktop.screenshot({ path: '/tmp/cyber-cta.png', fullPage: false });

// Mobile
const mobile = await browser.newPage();
await mobile.setViewportSize({ width: 390, height: 844 });
await mobile.goto('http://localhost:3001', { waitUntil: 'networkidle' });
await mobile.waitForTimeout(2500);
await mobile.screenshot({ path: '/tmp/cyber-mobile-hero.png', fullPage: false });
await mobile.evaluate(() => window.scrollTo(0, 1900));
await mobile.waitForTimeout(900);
await mobile.screenshot({ path: '/tmp/cyber-mobile-missions.png', fullPage: false });

await browser.close();
console.log('Done');
