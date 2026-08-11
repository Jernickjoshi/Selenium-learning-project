const { Builder, By, until } = require('selenium-webdriver')
const { expect } = require('chai')
describe('Multipage tesing', () => {
    it('get into the web-form page', async function () {
        this.timeout(15000);
        const driver = await new Builder().forBrowser('chrome').build();
        try{
            await driver.get('https://www.selenium.dev/selenium/web/')
            const webForm = await driver.wait(until.elementLocated(By.linkText("web-form.html")), 5000);
            await webForm.click();
            const title = await driver.getTitle();
            expect(title).to.equal('Web form');
            const textArea = await driver.wait(until.elementLocated(By.xpath("//textarea[@name='my-textarea']")), 5000);
            await textArea.sendKeys('Hai everyone, I am learning Selenium Webdriver');
            const valueTextArea = await textArea.getAttribute("value");
            expect(valueTextArea).to.equal('Hai everyone, I am learning Selenium Webdriver');
            await new Promise(resolve => setTimeout(resolve, 3000));
        }
        finally{
            await driver.quit();
        }
    });
});