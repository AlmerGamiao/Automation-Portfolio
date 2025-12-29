const {test, expect}=require('@playwright/test');

test('Mouse Right Click',async({page})=>{

  await page.goto('https://automationteststore.com/');

  const books = await page.locator("//a[@href='https://automationteststore.com/index.php?rt=product/category&path=65']");
    
  await books.click({button:'right'});
  await page.waitForTimeout(3000);
    await books.click({button:'left'});
  await expect(page.locator('//span[text()="Books"]')).toHaveText('Books');

  await page.waitForTimeout(3000);
})