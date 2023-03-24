/**
 * @description redirect pageObject
 *
 * @author Ángel Cárdenas | acardenas
 */
import Selectors from './selectors';
import Drupal from '../../project-types/drupal';

class RedirectPageObject {
    private editButton: string = Selectors.primaryTab.buttonEdit;

    private dropdownUrlRedirect: string = Selectors.redirect.dropdownRedirect;

    private buttonAddNewRedirect: string = Selectors.redirect.buttonAddRedirect;

    private inputPathRedirect: string = Selectors.redirect.inputPathRedirect;

    private selectLanguage: string = Selectors.redirect.selectLanguage;

    private buttonSave: string = Selectors.loginDrupal.buttonLogin;

    private header = '//*/header';

    private divWarning: string = Selectors.redirect.warningExistUrl;

    private dropdownAction: string = Selectors.redirect.dropdownAction;

    private deleteAction: string = Selectors.redirect.deleteAction;

    private buttonDelete: string = Selectors.redirect.buttonDelete;

    private drupal: Drupal;

    constructor(drupal: Drupal) {
      this.drupal = drupal;
    }

    /**
     * @description function for navigate to create a new redirect
     * @param url
     */
    public navigateToAddRedirect(url: string): void {
      cy.visit(url);
      cy.xpath(this.editButton).click();
      cy.xpath(this.dropdownUrlRedirect).and('be.visible').then(() => {
        cy.xpath(this.dropdownUrlRedirect).click();
        cy.xpath(this.buttonAddNewRedirect).invoke('removeAttr', 'target').click();
      });
    }

    /**
     * @description function to create a new redirect for a content
     * @param newUrl
     * @param language ?
     */
    public addNewRedirection(newUrl: string, language?: string): void {
      if (!this.containsWhitespace(newUrl)) {
        cy.xpath(this.inputPathRedirect).and('be.visible').then(() => {
          cy.xpath(this.inputPathRedirect).type(newUrl);
          cy.xpath(this.header).click();
          cy.wait(2000);
          const element = cy.get('body');
          this.drupal.checkElementsAvailable(element, [this.divWarning]).then((el) => {
            if (el) {
              cy.get(this.divWarning).and('not.be.visible');
            }
          });

          if (language !== undefined) {
            this.drupal.checkElementsAvailable(element, [this.selectLanguage]).then((el) => {
              if (el) {
                cy.get(this.selectLanguage).select(language);
                cy.get(this.selectLanguage).and('have.value', language);
              }
            });
          } else {
            cy.xpath(this.buttonSave).click({ force: true });
          }
        });
      } else {
        throw new Error('The new URL must not include blank spaces.');
      }
    }

    /**
     * @description Function to remove a redirect for a content
     * @param url
     */
    public removeRedirect(url: string):void {
      cy.visit(url);
      cy.xpath(this.editButton).click();
      cy.xpath(this.dropdownUrlRedirect).click().then(() => {
        const element = cy.get('body');
        this.drupal.checkElementsAvailable(element, [this.dropdownAction]).then((el) => {
          if (el) {
            cy.get(this.dropdownAction).click().then(() => {
              cy.xpath(this.deleteAction).click();
            });
          } else {
            cy.xpath(Selectors.redirect.verisureTheme.actionIcon).click()
              .then(() => {
                cy.xpath(Selectors.redirect.verisureTheme.deleteOption).click();
              });
          }
        });
        cy.xpath(this.buttonDelete).click();
      });
    }

  private containsWhitespace = (str): boolean => /\s/.test(str);
}

export default RedirectPageObject;
