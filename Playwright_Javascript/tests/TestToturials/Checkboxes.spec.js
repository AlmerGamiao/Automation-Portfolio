const {test,expect} = require('@playwright/test');

test('Checkboxes ', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    await (await page.locator('#sunday')).check();
    await page.waitForTimeout(5000);

    await expect(await page.locator('#sunday')).toBeChecked();
    await expect(await page.locator('#sunday').isChecked()).toBeTruthy();


    await (await page.locator('#sunday')).uncheck();
    await page.waitForTimeout(5000);
    expect(await page.locator('#sunday').isChecked()).toBeFalsy();

    const checkedboxlocators = [
'#sunday',
'#saturday',
'#friday',
'#thursday',
'#wednesday'
];
for(const locator of checkedboxlocators){
    await page.locator(locator).check();
    await expect(await page.locator(locator)).toBeChecked();
    await expect (await page.locator(locator).isChecked()).toBeTruthy();
}

for(const locator of checkedboxlocators){
    if(await page.locator(locator).isChecked()){
        await page.locator(locator).uncheck();
        await expect (await page.locator(locator).isChecked()).toBeFalsy();
    }
}

await page.waitForTimeout(5000);

});