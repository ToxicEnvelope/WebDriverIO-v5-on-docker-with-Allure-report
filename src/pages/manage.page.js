import BasePage from '@/pages/base.page';
import ManageSelectors from '@/selectors/manage.view.selectors';


class ManagePage extends BasePage {

    constructor() { super(); }

    getCurrentSearchInputText() {
        const expectedText = this.getAttributeText(ManageSelectors.imageTitleText, 'value')
        this.asyncPageWait(5000);
        return expectedText;
    }   
}

export default new ManagePage();