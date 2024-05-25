import {test, expect} from '@playwright/test';
import { LoginPage } from '../../Playwright_JS/pages/login'


test('Login', async ({page}) => {
    const Login = new LoginPage(page)
    await Login.gotoLoginPage()
    await Login.login('standard_user','secret_sauce')
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
});

test('Login using invalid username', async({page}) => {  
    const Login = new LoginPage(page)
    await Login.gotoLoginPage()
    await Login.login('Invalid Username','secret_sauce')
    await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible()
});

test('Login using invalid password', async({page}) => {
    const Login = new LoginPage(page)
    await Login.gotoLoginPage()
    await Login.login('standard_user','invalid password')
    await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible()
});

test('Login success', async ({page}) => {
    const Login = new LoginPage(page)
    await Login.gotoLoginPage()
    await Login.loginValid()
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
});
