import BasePage from '@/pages/base.page';
import MediaLibrarySelectors from '@/selectors/mediaLibrary.view.selectors'; 
import Utils from '@/helpers/utils';
import { join } from 'path';


class MediaLibraryPage extends BasePage {

    constructor() { super(); }

    clickOnUploadButton() {
        this.click(MediaLibrarySelectors.uploadImageButton);
        this.asyncPageWait(5000);
        this.switchToFrame(MediaLibrarySelectors.uploadPopUpIfram);
    }

    addPublicIDAndTagToImage(pid, tag) {
        this.click(MediaLibrarySelectors.uploadPopUpAdvancedButton);
        this.sendKeys(MediaLibrarySelectors.uploadPopUpAdvancedFormImagePublicIDInput, pid);
        this.sendKeys(MediaLibrarySelectors.uploadPopUpAdvancedFormImageTagInput, tag);
        this.asyncPageWait(5000);
    };

    uploadImageFile() {
        this.click(MediaLibrarySelectors.uploadPopUpBrowseButton);
        const filePath = join(__dirname, '..', '..', 'baselineTestData', 'test_image.jpg');
        const remoteFile = this.upload(filePath);
        this.sendKeys(MediaLibrarySelectors.uploadPopUpBrowseButton, remoteFile);
    }

    getAllImagesInView() {
        return $$(MediaLibrarySelectors.articleAssetCardText);
    }

    getImageTitleText(index) {
        return this.getText(Utils.selectorBuilder(MediaLibrarySelectors.articleAssetBadgeQuery, index));
    }

    getImageAssetBadgeText(index) {
        const _ = Utils.selectorBuilder(MediaLibrarySelectors.articleAssetBadgeQuery, index);
        return this.getText(Utils.selectorBuilder(MediaLibrarySelectors.articleAssetBadgeTextQuery, _));
    }

    hoverOnImageByID(id) {
        this.click(Utils.selectorBuilder(MediaLibrarySelectors.articleInnerImageQuery, id));
        this.asyncPageWait(5000);
    }

    clickOnManageButtonFromImage(index) {
        const _ = Utils.selectorBuilder(MediaLibrarySelectors.articleAssetBadgeQuery, index);
        this.click(Utils.selectorBuilder(MediaLibrarySelectors.articleManageButtonQuery, _));
        this.asyncPageWait(5000);
    }
}

export default new MediaLibraryPage();