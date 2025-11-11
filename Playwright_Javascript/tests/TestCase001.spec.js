import {test,expect} from '@playwright/test';
require('dotenv').config();  // Use require instead of import
import {Objects} from '../pages/Objects.js';  // Remove the curly braces


test('TestCase001',async ({page}, testInfo)  =>{
console.log(process.env.BASE_URL)
console.log(process.env.USER_NAME)
console.log(process.env.PASSWORD)

const obj = new Objects(page);
await obj.gotologinpage(); 
await obj.login(process.env.USER_NAME, process.env.PASSWORD);    

    // await page.goto(process.env.BASE_URL)
    // await this.usernameInput.fill(process.env.USERNAME);
    // await this.passwordInput.fill(process.env.PASSWORD);
    // await page.fill('#user-name','standard_user')
    // await page.fill('#password','secret_sauce')
    await page.screenshot();
    await testInfo.attach('Login Page', { 
          body: await page.screenshot(), 
          contentType: 'image/png' 
        });
    // await page.click('#login-button')
    await expect(page.getByText('Swag Labs')).toBeVisible();


  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();

  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();

  await page.locator('[data-test="firstName"]').fill('Test');
  await page.locator('[data-test="lastName"]').fill('User');
  await page.locator('[data-test="postalCode"]').fill('0000');
  
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();
  await expect(page.getByText('Thank you for your order!')).toBeVisible();
   await page.screenshot();
    await testInfo.attach('Thank you for your order!', { 
          body: await page.screenshot(), 
          contentType: 'image/png' 
        });
  await expect(page.getByText('Your order has been dispatched, and will arrive just as fast as the pony can get there!')).toBeVisible();
 await page.screenshot();
    await testInfo.attach('Your order has been dispatched', { 
          body: await page.screenshot(), 
          contentType: 'image/png' 
        });
   await page.locator('[data-test="back-to-products"]').click();
   await page.getByRole('button', { name: 'Open Menu' }).click();
   await page.locator('[data-test="logout-sidebar-link"]').click();

    await page.pause();
    





});