const {test, expect} = require('@playwright/test');

test('Alerts', async ({page}) => {

await page.goto('https://testautomationpractice.blogspot.com/');

await page.waitForTimeout(2000);
page.on('dialog', async dialog => {
    expect(dialog.type()).toBe('alert');
    expect(dialog.message()).toBe('I am an alert box!');
    await dialog.accept();
});
await page.click('//button[@id="alertBtn"]');

});

test('Confirmation Alerts', async ({page}) => {

await page.goto('https://testautomationpractice.blogspot.com/');

await page.waitForTimeout(2000);
page.on('dialog', async dialog => {
    expect(dialog.type()).toBe('confirm');
    expect(dialog.message()).toBe('Press a button!');
    await dialog.accept();
});

await page.click('//button[@id="confirmBtn"]');

await expect(page.locator('//p[text()="You pressed OK!"]')).toBeVisible();

await page.waitForTimeout(2000);
page.on('dialog1', async dialog => {
    expect(dialog1.type()).toBe('confirm');
    expect(dialog1.message()).toBe('Press a button!');
    await dialog1.dismiss();
});

await page.click('//button[@id="confirmBtn"]');
await page.waitForTimeout(2000);
await expect(page.locator('//p[text()="You pressed Cancel!"]')).toBeVisible();


});

test('Prompt Alerts', async ({page}) => {

await page.goto('https://testautomationpractice.blogspot.com/');

await page.waitForTimeout(2000);
page.on('dialog', async dialog => {
    expect(dialog.type()).toBe('prompt');
    expect(dialog.message()).toBe('Please enter your name:');
    await dialog.accept('Playwright');
});

await page.click('//button[@id="promptBtn"]');

await expect(page.locator('//p[text()="Hello Playwright! How are you today?"]')).toBeVisible();


});