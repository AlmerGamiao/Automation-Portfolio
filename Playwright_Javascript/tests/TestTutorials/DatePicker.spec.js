const {test, expect} = require('@playwright/test');

test('Date Picker', async ({page}) => {


    await page.goto('https://testautomationpractice.blogspot.com/');

    // await page.fill('#datepicker', '12/25/2025');


    const year = 2025;
    const month = 'January';
    const day = 25; 
    await page.click('#datepicker');

    while (true) {
        const currentYear = await page.locator(".ui-datepicker-year").textContent();
        const currentMonth = await page.locator(".ui-datepicker-month").textContent();

        if(currentYear == year && currentMonth == month) {
            break;
        }
        // await page.click('[title="Next"]');
        await page.click('[title="Prev"]');
    }
    //loop approach
            // const dates =await page.$$('//table[@class="ui-datepicker-calendar"]/tbody/tr/td/a')

            // for(const dt of dates) {
            //     if (await dt.textContent() == day) {
            //         await dt.click();
            //         break;
            //     }
            // }
    //parameterized approach
            await page.click(`//table[@class="ui-datepicker-calendar"]/tbody/tr/td/a[text()="${day}"]`);

    await page.pause();
})