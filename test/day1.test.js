const { Builder, By } = require('selenium-webdriver');
const { expect } = require('chai');

describe('Example domain page test', () => {
    it('should check is the heading is expected', async function () {
        this.timeout(15000);
        const driver = await new Builder().forBrowser('chrome').build();
            try{
            await driver.get('https://example.com');
            const heading = await driver.findElement(By.css('h1'));
            const text = await heading.getText();
            expect(text).to.equal('Example Domain')
            const title = await driver.getTitle();
            expect(title).to.equal('Example Domain')
        }
        finally { await driver.quit(); }
    })
});