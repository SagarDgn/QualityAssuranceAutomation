const {expect}= require("@playwright/test");

exports.LoginPage= class LoginPage{
    constructor(page){
        this.page=page;
        this.emailInput='//input[@id= "email"]';
        this.passwordInput= '//input[@id="password"]';
        this.loginInButton= '//button[@id="submit"]';
        this.loginValidation= "//p[contains(text),'Click on any contact to view the Contact Details'] ";
        this.logOut="//button[@id= 'logout']";
        this.alertMessage="//span[@id='error']";
    }

    async login(username,password){
        await this.page.waitForTimeout[2000];
        await this.page.locator(this.emailInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.loginInButton).click();
    }

    async verifyValidlogin(){
        const LoginValidation= await this.page.locator(this.loginValidation);
        await this.page.waitForTimeout(2000);
        expect(this.logOut).toBeVisible;
        await expect(LoginValidation).toHaveText('Click on any contact to view the Contact Details');
    }

    async verifyInvalidLogin(){
        const InvalidLogin= await this.page.locator(this.alertMessage);
        await expect(InvalidLogin).toHaveText('Incorrect username or password');
    }
}