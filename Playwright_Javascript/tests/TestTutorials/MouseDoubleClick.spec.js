const {test, expect} = require('@playwright/test');

test('Mouse Double Click', async ({page}) => {
    
    await page.goto('https://testautomationpractice.blogspot.com/');
    
    const doubleClickBtn = page.locator('//button[@ondblclick="myFunction1()"]'); 

    await doubleClickBtn.dblclick();

    await expect(page.locator('#field2')).toHaveValue('Hello World!');

    await page.waitForTimeout(3000);

})