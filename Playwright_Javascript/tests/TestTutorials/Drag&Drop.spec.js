const {test, expect} = require('@playwright/test');


test('Drag & Drop', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const dragSrc = page.locator('//div[@id="draggable"]');
    const dropDst = page.locator('//div[@id="droppable"]');

    await dragSrc.dragTo(dropDst);
    await page.waitForTimeout(2000);
    await expect(page.locator('//p[normalize-space()="Dropped!"]')).toHaveText('Dropped!');

    await page.waitForTimeout(3000);
})