import { test, expect } from '@playwright/test';

test('le compteur commence à 0', async ({ page }) => {
    await page.goto('http://localhost:5173/');

  // Expect a title "to contain" a substring.
    await expect(page.getByRole('button', { name: 'count is 0' })).toBeVisible();
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });