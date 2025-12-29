const{test,expect}=require('@playwright/test');

test('Single Files',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    await page.locator('//input[@id="singleFileInput"]').setInputFiles("tests/uploadFiles/Upload File 1.pdf");
    await page.click("//button[normalize-space()='Upload Single File']");
    await expect(page.locator('//p[contains(text(),"Upload File 1.pdf")]')).toContainText('Upload File 1.pdf');

    // Removing files
    await page.locator('//input[@id="singleFileInput"]').setInputFiles([]);
    await page.click("//button[normalize-space()='Upload Single File']");
    await expect(page.locator('//p[@id="singleFileStatus"]')).toContainText('No file selected.');

})

test('Multiple Files',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    await page.locator('//input[@id="multipleFilesInput"]').setInputFiles(["tests/uploadFiles/Upload File 1.pdf","tests/uploadFiles/Upload File 2.pdf"]);
    await page.click("//button[normalize-space()='Upload Multiple Files']");
    await expect(page.locator('//p[@id="multipleFilesStatus"]')).toContainText('Upload File 1.pdf');
    await expect(page.locator('//p[@id="multipleFilesStatus"]')).toContainText('Upload File 2.pdf');

    // Removing files
    await page.locator('//input[@id="multipleFilesInput"]').setInputFiles([]);
    await page.click("//button[normalize-space()='Upload Multiple Files']");
    await expect(page.locator('//p[@id="multipleFilesStatus"]')).toContainText('No files selected.');

})