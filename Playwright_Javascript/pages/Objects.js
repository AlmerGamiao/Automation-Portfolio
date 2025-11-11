
require('dotenv').config();  // Use require instead of import

exports.Objects = class Objects{
    constructor(page) {
        this.page = page;   
        this.usernameInput = ('#user-name');
        this.passwordInput = ('#password');  
        this.loginbutton = ('#login-button');
        }

    async gotologinpage(){
        await this.page.goto(process.env.BASE_URL);
    }

    async login(username, password) {
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.loginbutton).click();
    
    }
}
// module.exports = Objects;

