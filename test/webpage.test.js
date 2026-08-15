const { Builder } = require('selenium-webdriver');
const { expect } = require('chai');
const { beforeEach, afterEach } = require('mocha');
const WebFormPage = require('../pages/WebFormPage')

describe('Test Web Form Page', () => {
    let driver;
    let webForm;

    beforeEach(async function() {
        this.timeout(30000);
        driver = await new Builder().forBrowser('chrome').build();
        webForm = new WebFormPage(driver);
    });
    afterEach(async function(){
        this.timeout(15000);
        await driver.quit();
    })
    it('Testing text input field', async function(){
        this.timeout(15000);
        await driver.get('https://www.selenium.dev/selenium/web/web-form.html');
        const el = await driver.findElement(webForm.textInput);
        expect(el).to.not.be.null;
    });
});