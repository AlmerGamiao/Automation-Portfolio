const {test, expect} = require('@playwright/test');


// test.only('Test1', async ({page}) => {
//     console.log("This is Test1");
// })

// test('Test2', async ({page}) => {
//     console.log("This is Test2");
// })

// test('Test3', async ({page, browserName}) => {
//     console.log("This is Test3");
//         if(browserName==='chromium'){
//         test.skip();
//         }
// })

//fixme
// test('Test4', async ({page, browserName}) => {
//     test.fixme()
//     console.log("This is Test4");
// })

//fail
test('Test5', async ({page, browserName}) => {
    test.fail()
    expect(1).toBe(1);
})
