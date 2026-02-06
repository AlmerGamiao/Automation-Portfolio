const {test, expect} = require('@playwright/test');

// test.use({viewport:{width:1680,height:1050}})

test('Tracing', async ({page}) => {

    await page.goto('https://www.demoblaze.com/');
    await page.click('#login2');
    await page.fill('#loginusername', 'pavanol');
    await page.fill('#loginpassword', 'test@123');
    await page.click('button[onclick="logIn()"]');
    await expect(page.locator('#nameofuser')).toHaveText('Welcome pavanol');

    // trace: 'on',



})