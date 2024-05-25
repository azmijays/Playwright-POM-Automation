import {test, expect} from '@playwright/test';
import {PurchasePage} from '../../Playwright_JS/pages/purchase'
import { LoginPage } from '../pages/login';

test('Purchase - success', async ({page}) => {
    const Login = new LoginPage(page)
    const Purchase = new PurchasePage(page)

    await Login.loginValid() 
    await Purchase.purchase()
    await Purchase.checkout_info('Zafran','Abqory','11542')
    await Purchase.payment()
    await Purchase.success()

});

test ('Purchase - Invalid first name', async ({page}) => {
    const Login = new LoginPage(page)
    const Purchase = new PurchasePage(page)

    await Login.loginValid() 
    await Purchase.purchase()
    await Purchase.checkout_info('','Abqory','11542')
    await Purchase.alert()

});

test ('Purchase - Invalid last name', async ({page}) => {
    const Login = new LoginPage(page)
    const Purchase = new PurchasePage(page)

    await Login.loginValid() 
    await Purchase.purchase()
    await Purchase.checkout_info('Zafran','','11542')
    await Purchase.alert()

});

test ('Purchase - Invalid Postal code', async ({page}) => {
    const Login = new LoginPage(page)
    const Purchase = new PurchasePage(page)

    await Login.loginValid() 
    await Purchase.purchase()
    await Purchase.checkout_info('Zafran','Abqory','')
    await Purchase.alert()

});
