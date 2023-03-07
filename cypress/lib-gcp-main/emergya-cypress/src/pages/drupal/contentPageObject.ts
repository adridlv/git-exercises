import Selectors from './selectors';

/**
 * Admin for content page in drupal
 * @author Ángel Cárdenas | acardenas
 */
class ContentPageObject {
    iconFilter: string = Selectors.contentPageAdmin.iconFilter;

    inputFilterTitle: string = Selectors.contentPageAdmin.inputFilterTitle;

    inputFilterType: string = Selectors.contentPageAdmin.inputFilterType;

    buttonFilter: string = Selectors.contentPageAdmin.buttonFilter;

    listTitlesContent: string = Selectors.contentPageAdmin.listsContentTitles;

    firstElementListCcontentTitles: string = Selectors.contentPageAdmin.firstElementContentTitles;

    /**
     * @description Function to filter content listed by title
     *
     * @param type
     */
    public filterByType(type: string): void {
      cy.visit('admin/content');
      // cy.xpath(this.iconFilter).click();
      cy.xpath(this.inputFilterType).click().then(() => {
        cy.xpath(`//*/span[text()='${type}']`).click();
      });
      cy.xpath(this.buttonFilter).click();
    }

    /**
     * Function to filter content by title
     * @param title
     */
    public filterContentByTitle(title: string): void {
      cy.visit('admin/content');

      cy.xpath(this.inputFilterTitle).click().then(() => {
        cy.xpath(this.inputFilterTitle).type(title);
      });
      cy.xpath(this.buttonFilter).click();
    }

    /**
     * @description function to return the element list content
     * @return Chainable
     */
    public returnListContent(): Cypress.Chainable<JQuery<HTMLElement>> {
      return cy.xpath(this.listTitlesContent);
    }

    /**
     * @description function to return the first elment list of the content
     * @return Chainable
     */
    returnFirstElementContentList(): Cypress.Chainable<JQuery<HTMLElement>> {
      return cy.xpath(this.firstElementListCcontentTitles);
    }
}
export default ContentPageObject;
