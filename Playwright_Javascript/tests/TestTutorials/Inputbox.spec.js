const {test,expect} = require('@playwright/test');


test('Input box tutorial', async ({page}) => {

await page.goto('https://testautomationpractice.blogspot.com/');

await expect(await page.locator("#name")).toBeVisible();
await expect(await page.locator("#name")).toBeEnabled();
await expect(await page.locator("#name")).toBeEmpty();
await expect(await page.locator("#name")).toBeEditable();

await page.locator("#name").fill('Playwright');

await page.waitForTimeout(5000);
await page.pause();

});