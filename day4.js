const{ Builder, By } = require('selenium-webdriver');

(async  function day4(){
    const driver = await new Builder().forBrowser('chrome').build();
    try{
        await driver.get('https://www.selenium.dev/selenium/web/web-form.html')
        const textArea = await driver.findElement(By.xpath("//textarea[@name='my-textarea']"));
        await textArea.sendKeys('Hai everyone, I am learning Selenium Webdriver');
        await new Promise(resolve => setTimeout(resolve, 3000));
    }
    finally{
        await driver.quit();
    }
})();