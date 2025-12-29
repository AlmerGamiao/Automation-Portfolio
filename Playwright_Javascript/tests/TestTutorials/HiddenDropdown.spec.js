const {test, expect} = require('@playwright/test');

test('Hidden Dropdown', async ({page}) => {

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

await page.fill('[name="username"]', 'Admin');
await page.fill('[name="password"]', 'admin123');
await page.click('[type="submit"]');
await page.click('[href="/web/index.php/pim/viewPimModule"]');
await page.click('(//div[@class="oxd-select-text--after"])[3]');
await page.waitForSelector('//div[@role="listbox"]/div[@role="option"]/span');
const dropdownoptions = await page.$$('//div[@role="listbox"]/div[@role="option"]/span');
for(const dropdownoption of dropdownoptions){
    const value = await dropdownoption.textContent();
    console.log("Value: ", value);
    if(value.includes('QA Lead')){
        await dropdownoption.click();
        break;
    }
}

await page.pause();
});