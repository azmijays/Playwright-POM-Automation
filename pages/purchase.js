const { expect } = require("@playwright/test")

exports.PurchasePage = class PurchasePage {
    constructor (page) {
        
        this.page = page
        this.product_name = page.getByText('Sauce Labs Backpack')
        this.cart_button = page.getByText('Add to cart')
        this.cart_icon = page.locator('[data-test="shopping-cart-link"]')
        this.checkout_button = page.getByText('Checkout')
        this.firstname_input = page.locator('[data-test="firstName"]')
        this.lastname_input = page.locator('[data-test="lastName"]')
        this.postalcode_input = page.locator('[data-test="postalCode"]')
        this.continue_button = page.locator('[data-test="continue"]') 
        this.finish_button = page.getByText('Finish')

        this.alert_paymentSuccess = page.locator('[data-test="complete-text"]')
        this.alert_firstname = page.locator('[data-test="error"]')
    }

    async purchase () {
        await this.product_name.click()
        await this.cart_button.click()
        await this.cart_icon.click()
        await this.checkout_button.click()
    }

    async checkout_info(firstname,lastname,postalcode){
        await this.firstname_input.fill(firstname)
        await this.lastname_input.fill(lastname)
        await this.postalcode_input.fill(postalcode)
        await this.continue_button.click()
    }

    async payment (){
        await this.finish_button.click()
    }

    async success(){
        await expect(this.alert_paymentSuccess).toBeVisible()
    }

    async alert(){
        await expect(this.alert_firstname).toBeVisible()
    }

}