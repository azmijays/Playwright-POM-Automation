LoginPage = class LoginPage {
    constructor (page) {

        this.page = page
    }

    async gotoDashBoard (){
        await this.page.goto('https://magento.softwaretestingboard.com/')
    }
}