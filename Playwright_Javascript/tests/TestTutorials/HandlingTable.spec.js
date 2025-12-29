const {test, expect} = require('@playwright/test');
const { join } = require('path');


test('Handling Table', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = page.locator('#productTable');
    
    const columns = await table.locator('thead tr th');
    console.log('Number of columns:',await columns.count());

    const rows= await table.locator('tbody tr');
    console.log('Number of rows:',await rows.count());

    // expect(await columns.count()).toBe(4);
    // expect(await rows.count()).toBe(5);

    // 2nd Select Checkbox
    // const matchrow = rows.filter({
    //     has: page.locator('td'),
    //     hasText: 'Laptop'
    // })
    // await matchrow.locator('input').check();

    // 3rd Select Multiple Checkbox

// await selectProduct(rows,page,"Tablet") 
// await selectProduct(rows,page,"Laptop") 
// await selectProduct(rows,page,"Smartwatch") 



    //4th Print All Product Details
    // for (let i=0; i< await rows.count(); i++) {
    //     const row = rows.nth(i);
    //     const tds = row.locator('td');

    //     for(let j=0; j<await tds.count()-1; j++) {
    //      console.log(await tds.nth(j).textContent());

    //     }


    // }

    // 5th Read All data in pages in the table
    const pages = await page.locator('#pagination li a')
    console.log('Number of pages:',await pages.count());

    for (let p=0; p< await pages.count(); p++) {
        if(p>0){
            await pages.nth(p).click();
        }
      for (let i=0; i< await rows.count(); i++) {
        const row = rows.nth(i);
        const tds = row.locator('td');
        for(let j=0; j<await tds.count()-1; j++) {
         console.log(await tds.nth(j).textContent());

            }
        }
    }

});

async function selectProduct(rows,page,name) {
   const matchrow = rows.filter({
        has: page.locator('td'),
        hasText: name
    })
    await matchrow.locator('input').check();


}

