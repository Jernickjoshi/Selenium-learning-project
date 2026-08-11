const { Builder, By, until } = require('selenium-webdriver');
const { expect } = require('chai');

describe('Multi Window testing', () => {
    it('window_switching_tests', async function(){
        this.timeout(15000);
        const driver = await new Builder().forBrowser('chrome').build()
        try{
            await driver.get('https://www.selenium.dev/selenium/web/window_switching_tests/page_with_frame.html');
            const originalHandle = await driver.getWindowHandle();
            const newWindowButton = await driver.wait(until.elementLocated(By.id('a-link-that-opens-a-new-window')), 5000);
            await newWindowButton.click()
            const handles = await driver.getAllWindowHandles();
            const newhandle = handles[handles.length-1];
            await driver.switchTo().window(newhandle);
            const newWindowTitle = await driver.getTitle();
            expect(newWindowTitle).to.equal('Simple Page');
            await driver.close();
            await driver.switchTo().window(originalHandle)
            const oldPageTitle = await driver.getTitle();
            expect(oldPageTitle).to.equal('Test page for WindowSwitchingTest.testShouldFocusOnTheTopMostFrameAfterSwitchingToAWindow');
            await new Promise(resolve => setTimeout(resolve, 3000));
        }
        finally{
            await driver.quit()
        }
    });
});