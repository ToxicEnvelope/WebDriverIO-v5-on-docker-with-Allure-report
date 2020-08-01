import BasePage from '@/pages/base.page';

class ConsolePage extends BasePage {

    constructor() { super(); }

    clickOnMediaLibraryTab() {
        this.navigateToMediaLibraryTab();
        this.asyncPageWait(5000);
    }
}

export default new ConsolePage();