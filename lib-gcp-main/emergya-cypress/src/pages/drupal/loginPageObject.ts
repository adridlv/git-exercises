import Selectors from './selectors';
/**
 * @description loginDrupal page object
 *
 * @author Ángel Cárdenas Rodríguez | acardenas
 */

class LoginPageObject {
    private inputUserDrupal: string = Selectors.loginDrupal.inputUser;

    private inputPassDrupal: string = Selectors.loginDrupal.inputPass;

    private buttonLogin: string = Selectors.loginDrupal.buttonLogin;

    /**
     * @description function to check that the login element is visible
     * @return void
     */
    public checkElementLogin(): void {
      cy.xpath(this.inputUserDrupal).and('be.visible');
      cy.xpath(this.inputPassDrupal).and('be.visible');
      cy.xpath(this.buttonLogin).and('be.visible');
    }

    /**
     * @description Function for fill a username input
     * @param username
     * @return void
     */
    public fillInputUser(username: string): void {
      cy.xpath(this.inputUserDrupal).type(username);
    }

    /**
     * @description Function for fill a pass input
     * @param pass
     */
    public fillInputPass(pass: string): void {
      cy.xpath(this.inputPassDrupal).type(pass);
    }

    public clickLoginButton(): void {
      cy.xpath(this.buttonLogin).click();
    }
}
export default LoginPageObject;
