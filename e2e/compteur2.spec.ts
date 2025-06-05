import { test, expect } from '@playwright/test';

test('le compteur est bien à 2 après deux clics sur le bouton +', async ({ page }) => {
    await page.goto('http://localhost:5173/');

  // Expect a title "to contain" a substring.
    const button = page.getByRole('button');

    await button.click();
    await button.click();

  // Vérifie que le texte est désormais "count is 2"
  await expect(page.getByRole('button', { name: 'count is 2' })).toBeVisible();

});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });