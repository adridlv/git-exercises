import Common from 'emergya-cypress/src/project-types/common';
import AmazonPageObject from '../../pages/examples/AmazonPageObject ';

const common = Common.getInstance();
const amazonExample = AmazonPageObject.getInstance();

describe('Testing upload files', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.reload();
  });

  it('TC_004-ExampleAmazon', () => {
    cy.visit('https://amazon.es/');
    cy.wait(2000);

    amazonExample.rmvCookies();
    amazonExample.searchOnSearchNav();
    cy.get('#nav-search-submit-button').click();
    //cy.get("#twotabsearchtextbox").click();
    //amazonExample.clickOnSearchButton();
    amazonExample.clickOnStars();
    amazonExample.clickOnProduct();
    asdsad

    
    
  });

});
