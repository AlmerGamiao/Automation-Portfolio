const {test,expect} = require('@playwright/test')


test('TestCase001',async ({page}, testInfo)  =>{

    await page.goto('https://www.saucedemo.com/')
    await page.fill('#user-name','standard_user')
    await page.fill('#password','secret_sauce')
    await page.screenshot();
    await testInfo.attach('Login Page', { 
          body: await page.screenshot(), 
          contentType: 'image/png' 
        });
    await page.click('#login-button')
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