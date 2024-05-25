import {test, expect} from '@playwright/test'
import {PurchasePage} from '../../Playwright_JS/pages/magento_purchase'

test.beforeEach(async ({page}) => {
    await page.goto('https://magento.softwaretestingboard.com/');
});

test('Purchase in magento', async ({page}) => {
    const Purchase = new PurchasePage(page)
    await Purchase.purchase()
    //await expect(page).toHaveURL('https://magento.softwaretestingboard.com/checkout/cart/')
    
    await Purchase.shippingAddress('Zafran','Abqory','Jakarta')
    
    
    //await page.waitForLoadState('load')
    //await expect(page.getByRole('link', { name: 'Be the first to review this' })).toBeVisible()
});