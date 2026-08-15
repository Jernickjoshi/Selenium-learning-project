const { By } = require('selenium-webdriver');

class WebFormPage {
    constructor(driver) {
        this.driver = driver;
        this.textInput = By.id('my-text-id');
        this.submitButton = By.xpath('//button[@type=submit]');
    }
}

module.exports = WebFormPage;