const {test, expect} = require('@playwright/test');

test('Handle Inner Frames', async ({page}) => {

await page.goto("https://ui.vision/demo/webtest/frames/");

const frame3= await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"})
frame3.fill('//input[@name="mytext3"]', 'This is Frame 3');


// nested frames
const childFrames = await frame3.childFrames()
childFrames[0].check('[class="AB7Lab Id5V1"]');
await page.pause();

});