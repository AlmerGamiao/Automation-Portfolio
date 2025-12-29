const{test,expect}=require('@playwright/test');

test('Mouse Hover',async({page})=>{

    await page.goto('https://automationteststore.com/');

    const apparel = await page.locator("(//a[contains(text(),'Apparel & accessories')])[2]");
    const shoes = await page.locator("//a[contains(text(),'Shoes')]");

    // Hover action
    await apparel.hover();
    await shoes.click();

    await page.waitForTimeout(3000);
})