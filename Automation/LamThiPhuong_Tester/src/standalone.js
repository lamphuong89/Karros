const wdio = require('webdriverio');
(async () => {
    const browser = await wdio.remote({
        automationProtocol: 'webdriver',
        port: 9515,
        capabilities: {
            browserName: 'chrome'
        }
    });
    try {
        // Arrange
        await browser.url('https://tiki.vn');
        // Act
        const INPUT_SEARCH = await browser.$('input[type="text"]');
        const BTN_SEARCH = await browser.$('//button[contains(text(), "Tìm kiếm")]');
        await INPUT_SEARCH.setValue("hộp đựng túi rác");
        await BTN_SEARCH.click();
        await browser.pause(3000);
        // Assert
        let pageTitle = await browser.getTitle()
        console.log(`Page title is: ${pageTitle}`);
        // if (pageTitle.toLowerCase().includes('bỉm em bé')) {
        //     console.log("Test Passed!!!");
        // } else {
        //     console.log("Test Failed!!!");
        // }
    } catch (err) {
        console.error(err);
    } finally {
        await browser.deleteSession();
    }
})();