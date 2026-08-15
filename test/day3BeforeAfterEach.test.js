const { Builder, By, until } = require('selenium-webdriver');
const { expect } = require('chai');
const { afterEach, beforeEach } = require('mocha');

describe('framework testing', () => {
    let driver;

    beforeEach(async function(){
        this.timeout(15000);
        driver = await new Builder().forBrowser('chrome').build();
    });
    afterEach(async function() {
        this.timeout(15000);
        await driver.quit();
    });
    it('should check is the heading is expected', async function () {
        this.timeout(15000);
        await driver.get('https://example.com');
            const heading = await driver.findElement(By.css('h1'));
            const text = await heading.getText();
            expect(text).to.equal('Example Domain')
            const title = await driver.getTitle();
            expect(title).to.equal('Example Domain')
        });
    it('check the page title', async function() {
            this.timeout(15000);
            await driver.get('https://www.selenium.dev/selenium/web/')
                        const webForm = await driver.wait(until.elementLocated(By.linkText("web-form.html")), 5000);
                        await webForm.click();
                        const title = await driver.getTitle();
                        expect(title).to.equal('Web form');
        });
});