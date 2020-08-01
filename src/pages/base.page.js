import CommonSelectors from '@/selectors/common.selectors';


class BasePage {

    constructor() {}

    click(locator) {
        try {
            $(locator).click();
        } catch (e) {
            throw e;
        }
    }

    sendKeys(locator, phrase) {
        try {
            $(locator).addValue(phrase);
        } catch (e) {
            throw e;
        }
    }

    switchToFrame(locator) {
        try {
            browser.switchToFrame(locator);
            this.asyncPageWait(10000);
        } catch (e) {
            throw e;
        }
    }

    switchToParentFrame() {
        try {
            browser.switchToParentFrame();
            this.asyncPageWait(10000);
        } catch (e) {
            throw e;
        }
    }

    getAttributeText(locator, attributeType) {
        try {   
            return $(locator).getAttribute(attributeType);
        } catch (e) {
            throw e;
        }
    }

    navigateToMediaLibraryTab() {
        try {
            this.click(CommonSelectors.navBarMediaLibraryLink);
        } catch (e) {
            throw e;
        }
    }

    async asyncPageWait(ms) {
        try {
            await browser.pause(ms);
        } catch (e) {
            throw e;
        }
    }

    upload(filePath) {
        try {
            return browser.uploadFile(filePath);
        } catch (e) {
            throw e;
        }
    }

    getText(locator) {
        try {
            return $(locator).getText();
        } catch (e) {
            throw e;
        }
    }
}

export default BasePage;