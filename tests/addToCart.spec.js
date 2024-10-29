// tests/addToCart.spec.js
import { test, expect } from '@playwright/test';
import { ProductPage } from '../pages/ProductPage.js';

test('Add to cart test', async ({ page }) => {
  const productPage = new ProductPage(page);

  // Go to the homepage
  await page.goto('http://www.automationpractice.pl/index.php');

  // Select the "Women" category
  await productPage.selectCategory('Women');

  // Select the product "Blouse" by clicking on its image (use XPath to avoid Quick view overlay)
  await page.locator(`//img[@title="Blouse"]`).click({ force: true });

  // Select color "White" using XPath for the color option
  await page.locator(`//a[@name="White" and @class="color_pick"]`).click({ force: true });

  // Click on the "Add to cart" button
  await page.locator('//button[@name="Submit"]').click();

  // Wait for the overlay with "Proceed to checkout" button and click it
  await page.waitForSelector('//a[@title="Proceed to checkout"]', { timeout: 10000 });
  await page.locator('//a[@title="Proceed to checkout"]').click();

  // Add assertions to confirm success
  await expect(page.locator('.layer_cart_product')).toBeVisible();
  await expect(page.locator('.ajax_cart_product_txt')).toContainText('1 product');
});
