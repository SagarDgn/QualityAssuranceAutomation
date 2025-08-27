import {test} from "@playwright/test";
import { LoginPage } from "../test-object/login.po";
const testData= require('../fixtures/loginFixtures.json');

test.beforeEach(async ({page})=>{
    await page.goto('/');

} )

test.describe('valid login tests', ()=>{
    test('login using valid username and password', async ({page})=>{
        const login= new  LoginPage(page);
        await login.login(testData.validUser.userName,testData.validUser.password );
        await login.verifyValidlogin();
    })
})

// test.describe('invalid login tests', ()=>{
//     test('login usinig invalid username and valid password', async({page})=>{
//         const login= new LoginPage(page);
//         await login.login("", "herozero123@test.com")
//         await login.verifyInvalidLogin();
//     })
// })


test.describe('invalid login tests', ()=>{
    test('login usinig  username and valid invalid password', async({page})=>{
        const login= new LoginPage(page);
        await login.login(testData.inValidUser.userName, testData.inValidUser.password);
        await login.verifyInvalidLogin();
    })
})