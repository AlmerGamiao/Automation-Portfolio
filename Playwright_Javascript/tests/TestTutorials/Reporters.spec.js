import {test, expect, chromium} from '@playwright/test';

test('Test1', async ({page}) => {

    await page.goto('https://www.demoblaze.com/');
 await expect(page).toHaveTitle('STORE');


})

test('Test2', async ({page}) => {
await page.goto('https://www.wikipedia.org/')
await expect(page).toHaveTitle('Wikipedia')
})

test('Test3', async ({page}) => {
 await page.goto('https://demo.nopcommerce.com/');
 await expect(page).toHaveTitle('nopCommerce demo store. Home page title');

})