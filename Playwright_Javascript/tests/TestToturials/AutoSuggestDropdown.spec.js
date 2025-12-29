const{test,expect}=require('@playwright/test');

test('AutoSuggest Dropdown', async ({page}) => {
    await page.goto('https://www.wikipedia.org/');

    await page.fill('//input[@id="searchInput"]', 'Playwright');
    // Wait for the auto-suggest dropdown to appear
    await page.waitForSelector('//div[@class="suggestions-dropdown"]/a/div/h3');
     const playwrightoptions = await page.$$('//div[@class="suggestions-dropdown"]/a/div/h3');
    for(const playwrightoption of playwrightoptions){
        const value = await playwrightoption.textContent();
        console.log("Value: ", value);
        if(value.includes('Playwright (software)')){
            await playwrightoption.click();
            break;
        }
    }
    await page.waitForTimeout(5000);
});