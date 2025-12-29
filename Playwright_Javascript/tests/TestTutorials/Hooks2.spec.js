const {test, expect} = require('@playwright/test');
let page;

test.beforeAll(async({browser})=>{
   page= await browser.newPage();
await page.goto('https://www.demoblaze.com/');

    await page.click('#login2');
    await page.fill('#loginusername', 'pavanol');
    await page.fill('#loginpassword', 'test@123');
    await page.click('button[onclick="logIn()"]');

})

test.afterAll(async()=>{
    await page.click('#logout2');
})


test('Home Page Demo', async () => {
    
    const products =await page.$$('.hrefch');
    await expect(products).toHaveLength(9);

})

test('Add Product to Cart', async () => {

await page.goto('https://www.demoblaze.com/');

    await page.click('#login2');
    await page.fill('#loginusername', 'pavanol');
    await page.fill('#loginpassword', 'test@123');
    await page.click('button[onclick="logIn()"]');
    await page.click('//a[normalize-space()="Samsung galaxy s6"]');
    await page.click('//a[normalize-space()="Add to cart"]');


page.on('dialog', async dialog => {
    await expect(dialog.message()).toBe('Product added.');
    await dialog.accept();
});


})