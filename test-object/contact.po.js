const {expect}= require("@playwright/test");
const { threadCpuUsage } = require("process");

exports.ContactPage= class ContactPage{
    constructor(page){
        this.page=page;
        this.addContactButton="//button[@id='add-contact']";
        this.firstNameInput="//input[@id='firstName']"; 
        this.lastNameInput="//input[@id='lastName']";
        this.dob="//input[@id='birthdate']"
        this.emailInput="//input[@id='email']";
        this.phoneInput= "//input[@id='phone']";
        this.streetAddressI="//input[@id='street1']";
        this.streetAddressII="//input[@id='street2']";
        this.city="//input[@id='city']";
        this.state="//input[@id='stateProvince']";
        this.postalCode="//input[@id='postalCode']";
        this.country="//input[@id='country']";
        this.submitButton= "//input[@id='submit']";
        this.savedFirstName="//span[@id='firstName']";
        this.savedLastName="//span[@id='lastName']";
        this.savedDob= "//span[@id='birthDate']";
        this.savedEmail= "//span[@id='email']";
        this.savedPhone="//span[@id='phone']";
        this.savedAddress= "//span[@id='street1']";
        this.savedCity= "//span[@id='city']";
        this.savedPostal= "//span[@id='postalCode']";
        this.savedCountry= "//span[@id='country']";
        this.savedState= "//span[@id='state']"
        this.viewCreatedContact= "//th[contains(text(),'Name')]//following :: 1";
        this.editContact="//button[@id='edit-contact']";
        this.deleteContact="//button[@id='delete']"
    }

    async addContact(firstNameInput, lastNameInput,dob,emailInput,phoneInput,streetAddressI,streetAddressII,city,state,postalCode,country){
        await this.page.waitForTimeoput[2000];
        await this.page.locator(this.firstNameInput).fill(firstNameInput);
        await this.page.locator(lastNameInput).fill(lastNameInput);
        await this.page.locator(dob).fill(dob);
        await this.page.locator(emailInput).fill(emailInput);
        await this.page.locator(phoneInput).fill(phoneInput);
        await this.page.locator(streetAddressI).fill(streetAddressI);
        await this.page.locator(streetAddressII).fill(streetAddressII);
        await this.page.locator(city).fill(city);
        await this.page.locator(state).fill(state);
        await this.page.locator(postalCode).fill(postalCode);
        await this.page.locator(country).fill(country);
        await this.page.locator(this.submitButton).click(); 
    }

    async verifyValidContact(fname,lname,dob,email,phone,address,city,state,postalCode,country){

        const fNameValidation= await this.page.locator(this.savedFirstName);
        const lNameValidation= await this.page.locator(this.savedLastName);
        const dobValidation= await this.page.locator(this.savedDob);
        const emailValidation= await this.page.locator(this.savedEmail);
        const phoneValidation= await this.page.locator(this.savedPhone);
        const addressValidation= await this.page.locator(this.savedAddress);
        const cityValidation =await this.page.locator(this.savedCity);
        const stateValidation= await this.page.locator(this.savedState);
        const postalCodeValidation= await this.page.locator(this.savedPostal);
        const countryValidation= await this.page.locator(this.savedCountry);
        await expect(fNameValidation).toHaveText(fname);
        await expect(lNameValidation).toHaveText(lname);
        await expect(dobValidation).toHaveText(dob);
        await expect(emailValidation).toHaveText(email);
        await expect(phoneValidation).toHaveText(phone);
        await expect(addressValidation).toHaveText(address);
        await expect(cityValidation).toHaveText(city);
        await expect(stateValidation).toHaveText(state);
        await expect(postalValidation).toHaveText(postal);
        await expect(countryValidation).toHaveText(country);
    }
    async viewContact(){
        await this.page.locator(this.viewCreatedContact).click();
    }

    async contactEdit(firstName){
        await this.page.locator(this.editContact()).click();
        await this.page.locator()
    }
}