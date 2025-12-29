const{test,expect} = require('@playwright/test')

test('Record Video', async ({page}) => {


    await page.goto('https://www.demoblaze.com/');
    await page.click('#login2');
    await page.fill('#loginusername', 'pavanol');
    await page.fill('#loginpassword', 'test@123');
    await page.click('button[onclick="logIn()"]');
    await page.waitForTimeout(1000);





})
