const { Builder, By } = require('selenium-webdriver');

(async function day2() {
    const driver = await new Builder().forBrowser('chrome').build();
    try{
    await driver.get('https://www.selenium.dev/selenium/web/web-form.html');
    const inputField = await driver.findElement(By.id('my-text-id'));
    await inputField.sendKeys("enter email");
    await driver.findElement(By.css('button[type="submit"]')).click();
    await new Promise(resolve => setTimeout(resolve, 3000));
    }
    finally{
        await driver.quit()
    }
}) ();