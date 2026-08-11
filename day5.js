const { Builder, By, until, } = require('selenium-webdriver');

(async function day5(){
    const driver = await new Builder().forBrowser('chrome').build();
    try{
        await driver.get('https://www.selenium.dev/selenium/web/web-form.html')
        const disabledBox = await driver.wait(until.elementLocated(By.xpath('//input[@placeholder="Disabled input"]')), 5000, 'Input box is disabled');
        await disabledBox.sendKeys('hai disabled inputbox')
    }
    finally{
        await driver.quit();
    }
})();