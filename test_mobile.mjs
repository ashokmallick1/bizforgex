import { chromium } from 'playwright';

async function testMobile() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 375, height: 812 }, // iPhone X / 13 mini dimensions
    isMobile: true,
    hasTouch: true,
    deviceScaleFactor: 2,
  });

  const page = await context.newPage();
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });

  // Take full page screenshot
  await page.screenshot({ path: 'mobile_screenshot_375.png', fullPage: true });

  // Check for horizontal overflow
  const overflow = await page.evaluate(() => {
    return {
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      hasHorizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth
    };
  });

  console.log('Mobile 375px metrics:', JSON.stringify(overflow, null, 2));

  // Find any elements exceeding viewport width
  const overflowingElements = await page.evaluate(() => {
    const docWidth = document.documentElement.clientWidth;
    const elements = Array.from(document.querySelectorAll('*'));
    const bad = [];
    for (const el of elements) {
      const rect = el.getBoundingClientRect();
      if (rect.right > docWidth + 2) {
        bad.push({
          tag: el.tagName,
          className: el.className,
          id: el.id,
          right: rect.right,
          width: rect.width,
        });
      }
    }
    return bad.slice(0, 10);
  });

  console.log('Elements overflowing:', JSON.stringify(overflowingElements, null, 2));

  await browser.close();
}

testMobile().catch(console.error);
