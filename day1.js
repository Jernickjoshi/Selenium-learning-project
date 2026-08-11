const { Builder, By } = require('selenium-webdriver');
(async function demoTesting() {
    const driver = await new Builder().forBrowser('chrome').build();
    try{
    await driver.get('https://example.com');
    const heading = await driver.findElement(By.css('h1'));
    const text = await heading.getText();
    console.log(`text in heading: ${ text }`)
    const title = await driver.getTitle();
    console.log(`this is the title: ${ title }`)
}
finally { await driver.quit(); }
})();