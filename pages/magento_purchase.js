const { expect } = require("@playwright/test")

exports.PurchasePage = class PurchasePage {
    constructor (page) {
        this.page = page
        this.product_Men = page.getByRole('link', { name: 'Men', exact: true })
        this.product_Name  = page.getByText('Argus All-Weather Tank ')
        this.product_size = page.getByLabel('M', { exact: true })
        this.product_color = page.getByLabel('Gray')
        this.product_Qty = page.getByLabel('Qty')
        this.button_addtoCart = page.getByRole('button', { name: 'Add to Cart' })
        this.home_page = page.getByText('Home')
        this.icon_addtoCart = page.getByRole('link', { name: 'My Cart' })
        this.button_proceedtoCheckout = page.getByRole('button', { name: 'Proceed to Checkout' })

        // Shipping addres class
        this.first_name = page.getByRole('input',{name:'firstname'})
        this.last_name = page.getByRole('input',{name:'lastname'})
        this.company_name = page.getByRole('input',{name:'company'})

    }

    async purchase(){
        await this.product_Men.click()
        await this.product_Name.click()
        await this.product_size.click()
        await this.product_color.click()
        await this.product_Qty.fill('5')
        await this.button_addtoCart.click()
        await this.home_page.click()
        await this.icon_addtoCart.click()
        await this.button_proceedtoCheckout.click()
    }
    async shippingAddress(fisrtname,lastname,company){
        await this.first_name.fill(fisrtname)
        await this.last_name.filll(lastname)
        await this.company_name.fill(company)
        
    }
}