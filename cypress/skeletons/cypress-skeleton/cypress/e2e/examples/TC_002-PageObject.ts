import Common from 'emergya-cypress/src/project-types/common';
import ExampleWebPageObject from '../../pages/examples/ExampleWebPageObject';
import EasyUploadPageObject from '../../pages/examples/EasyUploadPageObject';

const common = Common.getInstance();
const easyUpload = EasyUploadPageObject.getInstance();
const exampleWeb = ExampleWebPageObject.getInstance();

describe('Testing upload files', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.reload();
  });

  it('TC_001 - Drag and drop', () => {
    cy.visit('https://easyupload.io/');

    easyUpload.getUploadInput().then(($element) => {
      common.uploadFileDragAndDrop($element, 'cypress/fixtures/test.ico');
    });
    easyUpload.clickUploadButton();
    easyUpload.checkSuccessMessage();
  });

  it('TC_002 - Clicks element and uploads a file', () => {
    cy.visit('http://localhost:3000/');

    exampleWeb.uploadFile('cypress/fixtures/test.ico');
    exampleWeb.submit();
    exampleWeb.checkUploadedFile();
  });

  it('TC_003 - Upload via API', () => {
    const id = 1;
    common.uploadFileToAPI('test.ico', 'image/ico', 'file', `https://petstore.swagger.io/v2/pet/${id}/uploadImage`);
  });
});
