const {test, expect} = require('@playwright/test');

test('MultiDropdowns', async ({page}) => {


await page.goto('https://testautomationpractice.blogspot.com/');

// await page.selectOption('#colors', ['Yellow', 'Blue', 'Red']);
await expect(await page.locator('#colors option')).toHaveCount(7);

const options = await page.$$('#colors option');
console.log('Number of options in dropdown: ', options.length);
await expect(options.length).toBe(7);

const content = await page.locator('#colors').textContent();
await expect(content.includes('Red')).toBeTruthy();
await expect(content.includes('Black')).toBeFalsy();


await page.waitForTimeout(5000);

    
});  