import Common from 'emergya-cypress/src/project-types/common';
import AmazonPageObject from '../../pages/examples/AmazonPageObject ';

const common = Common.getInstance();
const amazon = AmazonPageObject.getInstance();

describe('Testing upload files', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.reload();
  });

  it('TC_004-ExampleAmazon', () => {
    cy.visit('https://amazon.es/');

    asdasd
    
  });

});
