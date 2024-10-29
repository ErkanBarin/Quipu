// pages/ProductPage.js
export class ProductPage {
  constructor(page) {
    this.page = page;
  }

  async selectCategory(category) {
    // Click on the category link (Women, Dresses, or T-shirts)
    await this.page.click(`#block_top_menu a[title="${category}"]`);
  }
}
