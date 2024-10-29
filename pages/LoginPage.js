// pages/LoginPage.js
import { expect } from '@playwright/test';

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailField = '#email';
    this.passwordField = '#passwd';
    this.signInButton = 'button[name="SubmitLogin"]';
  }

  async navigate() {
    await this.page.goto('http://www.automationpractice.pl/index.php');
  }

  async goToSignIn() {
    await this.page.click('a[title="Log in to your customer account"]');
  }

  async login(email, password) {
    await this.page.fill(this.emailField, email);
    await this.page.fill(this.passwordField, password);
    await this.page.click(this.signInButton);
  }
}
