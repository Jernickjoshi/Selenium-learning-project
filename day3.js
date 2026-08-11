const { Builder, By, Select, until } = require('selenium-webdriver');
(async function day3() {
    const driver = await new Builder().forBrowser('chrome').build();
    try{
        await driver.get('https://www.selenium.dev/selenium/web/web-form.html');
        const checkBox = await driver.wait(until.elementLocated(By.id("my-check-2")), 5000);
        const isChecked = await checkBox.isSelected();
        if(!isChecked){
            await checkBox.click();
        }
        const dropdownBox = await driver.findElement(By.name("my-select"));
        const dropdowns = new Select(dropdownBox);
        await dropdowns.selectByValue('2');
        const password = await driver.findElement(By.xpath('//input[@type="password"]'));
        await password.sendKeys("jerry1621");
        await new Promise(resolve => setTimeout(resolve, 3000));
    }
    finally{ await driver.quit()}
})();