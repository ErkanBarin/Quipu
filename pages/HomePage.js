// pages/HomePage.js
export class HomePage {
  constructor(page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('http://www.automationpractice.pl/index.php');
  }

  async searchProduct(productName) {
    await this.page.fill('input[name="search_query"]', productName);
    await this.page.click('button[name="submit_search"]');
  }
}
