exports.LoginPage = class LoginPage {
    
      constructor (page) {
  
          this.page = page
          this.username_textbox = page.getByPlaceholder('Username')
          this.password_textbox = page.getByPlaceholder('Password')
          this.login_button = page.getByText('login')
      }

      async gotoLoginPage(){
        await this.page.goto('https://www.saucedemo.com/');
      }

      async login (username, password) {
        await this.username_textbox.fill(username)
        await this.password_textbox.fill(password)
        await this.login_button.click()
      }

      async loginValid () {
        await this.page.goto('https://www.saucedemo.com/');
        await this.username_textbox.fill('standard_user')
        await this.password_textbox.fill('secret_sauce')
        await this.login_button.click()
      }
  }