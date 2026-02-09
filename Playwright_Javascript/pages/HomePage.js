const {expect} = require('@playwright/test');
exports.HomePage = 
class HomePage {
    constructor(page) {
        this.page = page;
        this.productList = '//div[@id="tbodyid"]/div/div/div/h4/a';
        this.addToCartbtn = '//a[normalize-space()="Add to cart"]';
        this.cart = '#cartur';


    }

async addProductToCart(productName) {
  const product = this.page
    .locator(this.productList)
    .filter({ hasText: productName })
    .first();

  await product.scrollIntoViewIfNeeded();
  await product.click();

  // Register dialog BEFORE clicking Add to cart
  this.page.once('dialog', async dialog => {
    if (dialog.message().includes('added')) {
      await dialog.accept();
    }
  });

  await this.page.locator(this.addToCartbtn).click();
}
    async goToCart(){
        await this.page.locator(this.cart).click();
    }


}