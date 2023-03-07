class EasyUploadPageObject {
  uploadButton: string;

  uploadInput: string;

  successMessage: string;

  private static easyUpload: EasyUploadPageObject;

  static getInstance(): EasyUploadPageObject {
    if (!EasyUploadPageObject.easyUpload) {
      EasyUploadPageObject.easyUpload = new EasyUploadPageObject();
    }

    return EasyUploadPageObject.easyUpload;
  }

  constructor() {
    this.uploadButton = "//button[@id = 'upload']";
    this.uploadInput = "//div[contains(@class, 'dz-default')]";
    this.successMessage = "//*[@id='upload-label-1']";
  }

  public getUploadInput():Cypress.Chainable {
    return cy.xpath(this.uploadInput);
  }

  public clickUploadButton():void {
    cy.xpath(this.uploadButton).click();
  }

  public checkSuccessMessage():void {
    cy.xpath(this.successMessage, { timeout: 60000 }).should('have.text', 'Upload Success!')
      .and('be.visible');
  }
}

export default EasyUploadPageObject;
