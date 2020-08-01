import BasePage from '@/pages/base.page';
import LoginSelectors from '@/selectors/login.view.selectors'; 

class LoginPage extends BasePage {

    constructor() { super(); }

    login(email, password) {
        this.sendKeys(LoginSelectors.userSessionEmailInput, email);
        this.sendKeys(LoginSelectors.userSessionPasswordInput, password);
        this.click(LoginSelectors.signInButton);
        this.asyncPageWait(5000);
    }
}

export default new LoginPage;