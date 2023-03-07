import Common from 'emergya-cypress/src/project-types/common';

const common = Common.getInstance();

describe('Testing functionalities', () => {
  it('Using the common library', () => {
    common.forceVisit('https://www.google.com/');
    cy.get('#L2AGLb > .QS5gu').then(($element) => {
      common.forceClick($element);
    });
  });
});
