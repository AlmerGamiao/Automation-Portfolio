import {test,expect} from '@playwright/test';
require('dotenv').config();  // Use require instead of import
import {LoginPage} from '../pages/LoginPage.js';  // Remove the curly braces



test('TestCasee002',async ({page}, testInfo)  =>{


// console.log(process.env.BASE_URL)
// console.log(process.env.USER_NAME)
// console.log(process.env.PASSWORD)

const login = new LoginPage(page);
await login.gotologinpage(); 
// await login.login(process.env.USER_NAME, process.env.PASSWORD);
    await expect(await page.getByTitle('ASP Logo')).toBeVisible();
    await page.fill('#organization','antlabs')
    await page.fill('#username','standard_user')
    await page.click('//input[@id="password"]')
    await page.keyboard.type('123')
    await page.click('//input[@id="password"]')
    await page.keyboard.type('123')
    await page.click('//button[@id="_login"]')
// await page.getByRole('input', { id: "password" }).fill('123')

await expect(await page.getByText('Invalid credentials')).toBeVisible();
await page.screenshot();
    await testInfo.attach('Invalid Login Attempt', { 
          body: await page.screenshot(), 
          contentType: 'image/png' 
        });

await page.pause();
});