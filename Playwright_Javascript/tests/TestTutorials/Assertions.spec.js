const {test, expect} = require('@playwright/test');

test('Assertions', async ({ page }) => { 


  await page.goto('https://demo.nopcommerce.com/register');

  await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

  await expect(page).toHaveTitle('nopCommerce demo store. Register');

  await expect(page.locator('.header-logo')).toBeVisible();

await expect(page.locator('#small-searchterms')).toBeEnabled();

await page.click('#gender-male');
await expect(page.locator('#gender-male')).toBeChecked(true);

await expect(page.locator('#NewsLetterSubscriptions_0__IsActive')).toBeChecked(true);

await expect(page.locator('#register-button')).toHaveAttribute('type', 'submit');

await expect(page.locator('.page-title h1')).toHaveText('Register'); //exact text match

await expect(page.locator('.page-title h1')).toContainText('Reg'); //partial text match

await page.fill('#FirstName', 'Test');
await expect(page.locator('#FirstName')).toHaveValue('Test');


await page.pause();
});
