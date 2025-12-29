import{test,expect} from '@playwright/test'

test('Page Screenshot', async ({page}) => {
    await page.goto('https://www.demoblaze.com/');
    await page.screenshot({path:'tests/Screenshot/'+Date.now()+'Homepage.png'})
})

test('Full Screenshot', async ({page}) => {
    await page.goto('https://www.demoblaze.com/');
    await page.screenshot({path:'tests/Screenshot/'+Date.now()+'Fullpage.png',fullPage: true})
})

test('Element Screenshot', async ({page}) => {
    await page.goto('https://www.demoblaze.com/');
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").screenshot({path:'tests/Screenshot/'+Date.now()+'Product.png'})
})