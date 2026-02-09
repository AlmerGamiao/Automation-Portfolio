import {test, expect, chromium} from '@playwright/test';


test('Handling Windows', async ({page}) => {
//handling multiple pages in same browser context
const browser = await chromium.launch();
const context = await browser.newContext();
const page1 = await context.newPage();

const page2 = await context.newPage();
const allpages = context.pages();
console.log('Number of Pages:',allpages.length)

await page1.goto('https://www.wikipedia.org/')
await expect(page1).toHaveTitle('Wikipedia')

await page2.goto('https://www.google.com/')
await expect(page2).toHaveTitle('Google')
})

test.only('Handling Multiple Windows', async ({page}) => {
//handling multiple pages in same browser context
const browser = await chromium.launch();
const context = await browser.newContext();
const page1 = await context.newPage();

await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await expect(page1).toHaveTitle('OrangeHRM')

const pagePromise = context.waitForEvent('page')
await page1.click('//a[normalize-space()="OrangeHRM, Inc"]');

const newPage = await pagePromise;
await expect(newPage).toHaveTitle('Human Resources Management Software | HRMS | OrangeHRM')

})