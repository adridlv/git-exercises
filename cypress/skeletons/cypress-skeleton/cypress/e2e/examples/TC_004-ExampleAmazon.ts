//TODO
// import Common from 'emergya-cypress/src/project-types/common';
import AmazonPageObject from '../../pages/examples/AmazonPageObject ';
import {first} from "rxjs";

//TODO
// const common = Common.getInstance();
const amazonExample = AmazonPageObject.getInstance();

//TODO nombres descriptivos
describe('Testing upload files', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.reload();
  });

  //TODO nombre del test más descriptivo
  it('TC_004-ExampleAmazon', () => {
    cy.visit('https://amazon.es/');
    cy.wait(2000);

    amazonExample.rmvCookies();


    // amazonExample.searchOnSearchNav('papatas');
    // //TODO utilizar xpath, esto es un selector de CSS
    // cy.get('#nav-search-submit-button').click();

    amazonExample.search('padel');


    //TODO borrar código comentado
    //cy.get("#twotabsearchtextbox").click();
    //amazonExample.clickOnSearchButton();
    first = //li[@id='p_72/831280031']/span/a/section/span
    second
    third
    fourth

    amazonExample.clickOnStars(first);
    amazonExample.clickOnProduct();

  });

});
