import {test, expect} from '@playwright/test';
import  {LoginPage} from '../../pages/LoginPage.js';
import  {HomePage} from '../../pages/HomePage.js';
import  {CartPage} from '../../pages/CartPage.js';

test('Retrytest', async ({page}) => {

const Home = new HomePage(page);
const Login= new LoginPage(page);
const Cart= new CartPage(page);
const productName = 'Sony vaio i7'
console.log(process.env.USER_NAME);
console.log(process.env.PASSWORD);
await Login.gotologinpage();
await Login.login(process.env.USER_NAME,process.env.PASSWORD);
await page.waitForTimeout(2000);

await Home.addProductToCart(productName);
await page.waitForTimeout(2000);
await Home.goToCart();
await page.waitForTimeout(3000);

const status = await Cart.checkProductInCart(productName);
expect(await status).toBe(true);
await page.pause();

});

