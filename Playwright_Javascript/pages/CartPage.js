const {expect} = require('@playwright/test');
exports.CartPage = 
class CartPage {

    constructor(page) {
        this.page = page;
        this.noProducts = '//tbody[@id="tbodyid"]/tr/td[2]';
    }

    async checkProductInCart(productName) {
    const productsInCart = await this.page.$$(this.noProducts);

    for (const product of productsInCart) {
        const text = (await product.textContent())?.trim();
        console.log(text);

        if (text === productName.trim()) {
        return true;
        }
    }

    return false; // 
    }

}