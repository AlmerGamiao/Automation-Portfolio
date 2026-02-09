require('dotenv').config();  // Use require instead of import
const { expect } = require('@playwright/test');

exports.LoginPage = 
class LoginPage {

    constructor(page) {
        this.page = page;   
        this.loginlink = '#login2';
        this.usernameInput = '#loginusername';
        this.passwordInput = '#loginpassword';
        this.loginbutton = '//button[@onclick="logIn()"]';
        this.welcomeMessage = '//a[text()="Welcome pavanol"]';
        }

    async gotologinpage(){
        await this.page.goto(process.env.BASE_URL);
    }

    async login(USER_NAME, PASSWORD){ 
        await this.page.locator(this.loginlink).click();
        await this.page.locator(this.usernameInput).fill(USER_NAME);
        await this.page.locator(this.passwordInput).fill(PASSWORD);
        await this.page.locator(this.loginbutton).click();
        await this.page.waitForTimeout(2000);
        await expect(this.page.locator(this.welcomeMessage)).toHaveText('Welcome pavanol');
    }
}
    


