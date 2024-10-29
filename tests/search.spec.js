// tests/search.spec.js
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage.js';

test('Search test', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.navigate();
  await homePage.searchProduct('casual');
  
  const casualSpan = page.locator("//span[@class='lighter' and contains(text(), 'casual')]");
  await expect(casualSpan).toBeVisible();
  await expect(casualSpan).toHaveText('"casual"');
});
