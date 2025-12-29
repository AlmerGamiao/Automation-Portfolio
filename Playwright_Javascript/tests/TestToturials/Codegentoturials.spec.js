import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'PRODUCT STORE' }).click();
  await expect(page.getByRole('link', { name: 'Welcome pavanol' })).toBeVisible();
  await page.screenshot();
  await test.info().attach('Login Successful', {
    body: await page.screenshot(),
    contentType: 'image/png'
  });
  await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Cart', exact: true }).click();

  await page.getByRole('button', { name: 'Place Order' }).click();
  await page.getByRole('textbox', { name: 'Total: 360 Name:' }).click();
  await page.getByRole('textbox', { name: 'Total: 360 Name:' }).fill('testt');
  await page.getByRole('textbox', { name: 'Country:' }).click();
  await page.getByRole('textbox', { name: 'Country:' }).fill('test');
  await page.getByRole('textbox', { name: 'City:' }).click();
  await page.getByRole('textbox', { name: 'City:' }).fill('test');
  await page.getByRole('textbox', { name: 'Credit card:' }).click();
  await page.getByRole('textbox', { name: 'Credit card:' }).fill('32146547');
  await page.getByRole('textbox', { name: 'Month:' }).click();
  await page.getByRole('textbox', { name: 'Month:' }).fill('12');
  await page.getByRole('textbox', { name: 'Year:' }).click();
  await page.getByRole('textbox', { name: 'Year:' }).fill('2025');
  await page.getByRole('button', { name: 'Purchase' }).click();
  await expect(await page.getByText('Thank you for your purchase!')).toBeVisible();
  await page.screenshot();
  await test.info().attach('Order Placed Successfully', {
    body: await page.screenshot(),
    contentType: 'image/png'
  });
  await page.click('//button[text()="OK"]');
  await page.getByRole('link', { name: 'Log out' }).click();
});