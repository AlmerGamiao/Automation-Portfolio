import { test, expect } from '@playwright/test';
import path from 'path';
require('dotenv').config();

test('TestCase001', async ({ page }, testInfo) => {

  // This folder is automatically:
  // test-results/TestCase001/
  const outputDir = testInfo.outputDir;

  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');

  const loginShot = path.join(outputDir, 'login-page.png');
  await page.screenshot({ path: loginShot });

  await testInfo.attach('Login Page', {
    path: loginShot,
    contentType: 'image/png',
  });

  await page.click('#login-button');
  await expect(page.getByText('Swag Labs')).toBeVisible();

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();

  await page.locator('[data-test="firstName"]').fill('Test');
  await page.locator('[data-test="lastName"]').fill('User');
  await page.locator('[data-test="postalCode"]').fill('0000');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();

  const successShot = path.join(outputDir, 'order-success.png');
  await page.screenshot({ path: successShot });

  await testInfo.attach('Order Success', {
    path: successShot,
    contentType: 'image/png',
  });

  await expect(page.getByText('Thank you for your order!')).toBeVisible();
});
