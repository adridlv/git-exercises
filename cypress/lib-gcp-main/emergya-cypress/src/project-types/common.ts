class Common {
  private static common: Common;

  static getInstance(): Common {
    if (!Common.common) {
      Common.common = new Common();
    }

    return Common.common;
  }

  /**
   * @function forceClick
   * @description This command clicks on an element forcing the action, and it disables waiting for actionability.
   * @author Adrián Abril | <amaestre@emergya.com>
   * @example cy.get("selector").forceClick();
   */
  public forceClick = (element: object): void => {
    cy.wrap(element).click({ force: true });
  };

  /**
   * @function uploadFile
   * @description This command uploads a file using a normal file input.
   * @author Jose Gavilán | <jgavilan@emergya.com>
   * @param element
   * @param {string} filePath - File path that is going to be uploaded.
   * @example cy.get("selector").uploadFile("filePath");
   */
  public uploadFile = (element: object, filePath: string): void => {
    cy.wrap(element).selectFile(filePath);
  };

  /**
   * @function uploadFileDragAndDrop
   * @description This command uploads a file using a drag and drop file input.
   * @author Jose Gavilán | <jgavilan@emergya.com>
   * @param element
   * @param {string} filePath - Path of the file that is going to be uploaded.
   * @example cy.get("selector").uploadFileDragAndDrop("filePath");
   */
  public uploadFileDragAndDrop = (element: object, filePath: string): void => {
    cy.wrap(element).selectFile(filePath, { action: 'drag-drop' });
  };

  /**
   * @function uploadFileToAPI
   * @description This command helps to upload a file using an API
   * @author Jose Gavilán | <jgavilan@emergya.com>
   * @param {string} fileName - Name of the file that we are going to upload. It must be stored in the fixtures' folder.
   * @param {string} fileType - Type of file that we are going to upload. E.g.: image/png
   * @param {string} formDataFileName - Attribute in the formData where the API expects that the file will be in.
   * @param {string} url - URL of the API
   * @example cy.uploadFileToAPI('test.ico', 'image/ico', 'file',
   * `https://petstore.swagger.io/v2/pet/${id}/uploadImage`);
   */
  public uploadFileToAPI = (fileName: string, fileType: string, formDataFileName: string, url: string): void => {
    cy.fixture(fileName, 'binary').then((file) => {
      const blob = Cypress.Blob.binaryStringToBlob(file, fileType);
      const formData = new FormData();
      formData.append(formDataFileName, blob, fileName);

      cy.request({
        method: 'POST',
        url,
        body: formData,
        headers: {
          'content-type': 'multipart/form-data',
        },
      });
    });
  };

  /**
   * @function clickMultiple
   * @description This command clicks on all elements gotten when using cypress command get.
   * @author Adrián Abril | <amaestre@emergya.com>
   * @param element
   * @param {boolean} force - Optional parameter that indicates if it is going to click with force option or not.
   * @example cy.get("selector").clickMultiple(true);
   */
  public clickMultiple = (element: object, force: boolean = false): void => {
    cy.wrap(element).click({ multiple: true, force });
  };

  /**
   * @function forceVisit
   * @description This command helps to visit a different website to the origin one.
   * @author Adrián Abril | <amaestre@emergya.com>
   * @param {string} url - URL you want to visit.
   * @example cy.forceVisit('https://cypress-mock-test.onrender.com/');
   */

  public forceVisit = (url: string): void => {
    cy.window().then((win) => win.open(url, '_self'));
  };

  /**
   * @function checkElementsAvailable
   * @description This command checks if an element (or several) is available to using.
   * @author Adrián Abril | <amaestre@emergya.com>
   * @locators Array containing the locators to be checked. They must be either css or jquery selectors, not xpath.
   * @return {boolean} flag - Returns a boolean value indicating if elements are available.
   * @example cy.get("body").checkElementsAvailable([firstSelector, secondSelector]).then((flag) => { ... })
   */
  // eslint-disable-next-line max-len
  // eslint-disable-next-line max-len,@typescript-eslint/explicit-module-boundary-types,@typescript-eslint/no-explicit-any
  public checkElementsAvailable = (element: any, [...locators]: string[]): Promise<boolean> => new Cypress.Promise<boolean>((resolve) => {
    locators.forEach((i) => {
      if (element.find(i).length === 0) {
        resolve(false);
      }
    });
    resolve(true);
  });
}

export default Common;
