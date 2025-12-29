const {test, expect} = require('@playwright/test');

test('Keyboard Actions', async ({page}) => {
// https://playwright.dev/docs/api/class-keyboard
await page.goto('https://gotranscript.com/text-compare');

await page.type('(//textarea)[1]', 'Hola amigos');

//CTRL+A
await page.keyboard.press('Control+A');

//CTRL+C
await page.keyboard.press('Control+C');

//TAB
await page.keyboard.press('Tab');

//CTRL+V
await page.keyboard.press('Control+V');


await page.waitForTimeout(5000);




})