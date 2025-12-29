const {test, expect} = require('@playwright/test');

test('Bootstrap Dropdowns', async ({page}) => {
await page.goto('https://getbootstrap.com/docs/4.0/components/dropdowns/');
await page.click('#dropdownMenuButton');
// await expect(await page.locator('//div[@class="dropdown-menu show"]/a')).toHaveCount(3);
// const options = await page.$$('//div[@class="dropdown-menu show"]/a');
// console.log('Number of options in dropdown: ', options.length);
// await expect(options.length).toBe(3);

const options = await page.$$('//div[@class="dropdown-menu show"]/a');
for(const option of options){
    const value = await option.textContent();
    console.log("Value: ", value);
    // if(value.includes('Another action')|| value.includes('Something else here')){
    if(value.includes('Another action')){
        await option.click();
    }
}

await page.waitForTimeout(5000);

});