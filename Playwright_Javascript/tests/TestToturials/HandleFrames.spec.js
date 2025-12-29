const {test, expect} = require('@playwright/test');

test('Handle Frames', async ({page}) => {


await page.goto("https://ui.vision/demo/webtest/frames/");

const allframes = await page.frames();
console.log("Total Frames: ", allframes.length);


//1st Frame: Using name or url
const frame1 = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"})
frame1.fill('//input[@name="mytext1"]', 'This is Frame 1');



//2nd Frame: Using Locator
const frame2inputbox = await page.frameLocator('frame[src="frame_2.html"]').locator('[name="mytext2"]');
frame2inputbox.fill('This is Frame 2');
await page.pause();

});