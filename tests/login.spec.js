import {test, expect} from '@playwright/test';

test('has title', async ({page})=>{
    await page.goto('https://hamrobazaar.com/login');
      await page.getByPlaceholder("Phone Number").fill("9800000000");
      await page.getByPlaceholder("Password").fill("hgtytfdgfgf65");
      await page.getByText("Log in").click()
});

test('invalid phone', async ({page})=>{
    await page.goto('https://hamrobazaar.com/login');
      await page.getByPlaceholder("Phone Number").fill("");
      await page.getByPlaceholder("Password").fill("hgtytfdgfgf65");
      await page.getByText("Log in").click()
});

test('has title', async ({page})=>{
    await page.goto('https://hamrobazaar.com/login');
      await page.getByPlaceholder("Phone Number").fill("9800000000");
      await page.getByPlaceholder("Password").fill("");
      await page.getByText("Log in").click()
});