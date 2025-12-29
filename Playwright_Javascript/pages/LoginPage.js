
require('dotenv').config();  // Use require instead of import

exports.LoginPage = class LoginPage{
    constructor(page) {
        this.page = page;   
        this.organizzationInput = ('#organization');
        this.usernameInput = ('#username');
        this.passwordInput = ('#password');
        this.loginbutton = ('#_login');
        }

    async gotologinpage(){
        await this.page.goto(process.env.BASE_URL);
    }

    async login(USER_NAME) {
        await this.page.locator(this.organizzationInput).fill('antlabs');
        await this.page.locator(this.usernameInput).fill(USER_NAME);
        await this.page.locator(this.passwordInput).fill('123');
        await this.page.locator(this.loginbutton).click();
    
    }
}
// module.exports = Objects;

