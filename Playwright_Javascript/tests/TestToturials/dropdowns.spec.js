const {test, expect} = require('@playwright/test');

test('Dropdowns', async ({page}) => {       

    await page.goto('https://testautomationpractice.blogspot.com/');
    
    // await page.selectOption('#country', 'Canada');
    // await expect.soft(page.locator('#country')).toContainText('Canada');

    // await page.locator('#country').selectOption({label: 'India'});
    // await expect.soft(page.locator('#country')).toHaveValue('india');

    // await page.selectOption('#country', {index: 4});
    // await expect.soft(page.locator('#country')).toHaveValue('france');

    // await page.selectOption('#country', {value: 'usa'});
    // await expect.soft(page.locator('#country')).toHaveValue('usa');

//     await expect(await page.locator('#country option')).toHaveCount(10);
   
//     //dropdown count
    // const options=await page.$$('#country option');
//     console.log('Number of options in dropdown: ', options.length); 
//     await expect(options.length).toBe(10);


//     const content = await page.locator('#country').textContent();
//     await expect(content.includes('India')).toBeTruthy();

//     //dropdown values
// for(const option of options){
//     console.log(await option.textContent());        
// }
// let  status = false;
// // Assertions on dropdown values for loop

// for(const option of options){
//     let value=await option.textContent();
//      if(value.includes('India')){  
//         status = true;
//         break;
//     }
// }
// expect(status).toBeTruthy();

const options = await page.$$('#country option');

for (const option of options) {
  const value = (await option.textContent())?.trim();

  if (value === 'India') {
    await page.locator('#country').selectOption({ label: value });
    break;
  }
}


    // await page.waitForTimeout(5000);


});