// tests/login.spec.js
import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { DataGenerator } from '../utils/DataGenerator.js';
import { CsvWriter } from '../utils/CsvWriter.js';

test('Login test', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const csvWriter = new CsvWriter();

  const user = DataGenerator.generateFakeUser();
  await csvWriter.saveUser(user);  // Save user details to CSV

  await loginPage.navigate();
  await loginPage.goToSignIn();
  await loginPage.login(user.email, '12345');
});
