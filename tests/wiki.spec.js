// 1. Import Playwright tools
const { test, expect } = require('@playwright/test');

// 2. Define the test
test('My First Test: Wikipedia check', async ({ page }) => {

  // Step A: Navigate to the URL
  await page.goto('https://www.wikipedia.org/');

  // Step B: Assertion - Check if title contains "Wikipedia"
  await expect(page).toHaveTitle(/Wikipedia/);
  
  // Optional: Wait for 2 seconds to see the browser open (not for production)
  await page.waitForTimeout(2000); 
});