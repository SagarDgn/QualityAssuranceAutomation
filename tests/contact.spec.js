const { default: test } = require("@playwright/test");
import { expect } from "@playwright/test";
import { ContactPage } from "../test-object/contact.po";
import { LoginPage } from "../test-object/login.po";
import authenticateUser from "../utils/helper.spec";
import createEntity from "../utils/helper.spec";
const testData= require('../fixtures/loginFixtures.json');
const contactTestData= require('../fixtures/contactFixtures.json');

test.beforeEach(async ({page})=>{
    const login= new LoginPage(page);
    await page.goto('/');
    await login.login(testData.validUser.userName, testData.validUser.password);
    await login.verifyValidlogin();
})

test.describe('Valid add contact',()=>{
    test('Contact Add Test', async({page, request})=>{
        const contact= new ContactPage(page);
        await contact.addContact(textData.validContact.firstName, 
            textData.validContact.lastName,
             textData.validContact.dateOfBirth, 
             textData.validContact.email, 
             textData.validContact.phone,
             textData.validContact.streetAdd1, 
             textData.validContact.streetAdd2, 
             textData.validContact.city,
              textData.validContact.province,
              textData.validContact.postal,
               textData.validContact.country);

               await contact.verifyValidContact();
    });

    test('Contact Edit Test', async ({page,request})=>{
        const Data={
        "firstName": "Shyam",
        "lastName": "Khadka",
        "dateOfBirth": "2004-01-01",
        "email": "adf@123.com",
        "phone": "9800000000",
        "streetAdd1": "Basantapur",
        "streetAdd2": "Kathmandu",
        "city": "Kathmanndu",
        "province": "Bagmati",
        "postal" : "0122",
        "country": "Nepal"
        };
        
        const contact= new ContactPage(page);
        accessToken= await authenticateUser(testData.validUser.userName, );
        await createEntity(Data,accessToken, '/contacts',{request});
        page.reload();
        await contact.viewContact();
        await contact.contactEdit(contactTestData.contactEdit.firstName);
        await contact.verifyValidContact(contactTestData.contactEdit.firstName);
    });

    test('Delete test case', async({page,request})=>{
        
    })

    }
});