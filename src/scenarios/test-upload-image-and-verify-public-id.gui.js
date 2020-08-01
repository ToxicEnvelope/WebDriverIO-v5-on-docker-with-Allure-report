import config from '@/config/gui';
import selectors from '@/selectors/manage.view.selectors';
import Utils from '@/helpers/utils';
import LoginPage from '@/pages/login.page';
import ConsolePage from '@/pages/console.page';
import MediaLibraryPage from '@/pages/mediaLibrary.page';
import ManagePage from '@/pages/manage.page';


describe('User Uploads New Image with Public ID and Validate Results - (E2E Scenario)', () => {

  const CURRENT_IMAGE_PUBLIC_ID = Utils.getUUID4();
  const CURRENT_IMAGE_TAG = "test-image";
  const EXPECTED_ASSET_BADGE_TEXT = "New";

  beforeEach(() => {
    browser.url(config.url);
  });
  
  it ('should verify that new ArticleImage uploaded, displayed at Grid and ArticleImageID is public', () => {
        
    LoginPage.login("yahav.hoffmann@gmail.com", "Aa123456~.");
    
    ConsolePage.clickOnMediaLibraryTab();
    
    MediaLibraryPage.clickOnUploadButton();
    MediaLibraryPage.addPublicIDAndTagToImage(CURRENT_IMAGE_PUBLIC_ID, CURRENT_IMAGE_TAG);
    MediaLibraryPage.uploadImageFile();
    MediaLibraryPage.switchToParentFrame();
    
    const elements = MediaLibraryPage.getAllImagesInView();
    for (let index=0; index<elements.length; index++) {
      const ACTUAL_IMAGE_TITLE_TEXT = MediaLibraryPage.getImageTitleText(index);
      const ATCUAL_ASSET_BADGE_TEXT = MediaLibraryPage.getImageAssetBadgeText(index);

      expect(ACTUAL_IMAGE_TITLE_TEXT).toContain(CURRENT_IMAGE_PUBLIC_ID);
      expect(ATCUAL_ASSET_BADGE_TEXT).toEqual(EXPECTED_ASSET_BADGE_TEXT);

      MediaLibraryPage.hoverOnImageByID(CURRENT_IMAGE_PUBLIC_ID)
      MediaLibraryPage.clickOnManageButtonFromImage(index);
      
      const ACTUAL_IMAGE_TITLE_SEARCH_TEXT = ManagePage.getCurrentSearchInputText();
      
      expect(ACTUAL_IMAGE_TITLE_SEARCH_TEXT).toEqual(CURRENT_IMAGE_PUBLIC_ID);;
      break;
    }
  });
});
