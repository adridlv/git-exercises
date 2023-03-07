import Common from 'emergya-cypress/src/project-types/common';

class ExampleWebPageObject {
  fileInput: string;

  fileInputSelector: string;

  fileDiv: string;

  fileDivSelector: string;

  submitButton: string;

  resultText: string;

  downloadLink: string;

  iframe: string;

  iframeDescription: string;

  multiButton: string;

  multiSpan: string;

  delayButton: string;

  delaySpan: string;

  invisibleButton: string;

  invisibleSpan: string;

  private common = Common.getInstance();

  private static exampleWeb: ExampleWebPageObject;

  static getInstance(): ExampleWebPageObject {
    if (!ExampleWebPageObject.exampleWeb) {
      ExampleWebPageObject.exampleWeb = new ExampleWebPageObject();
    }

    return ExampleWebPageObject.exampleWeb;
  }

  constructor() {
    this.fileInput = "//input[@type = 'file']";
    this.fileDiv = "//div[@class = 'upload-container']";
    this.fileInputSelector = "input[type='file']";
    this.fileDivSelector = "div[class='upload-container']";
    this.submitButton = "//button[@id = 'upload-btn']";
    this.resultText = "//span[@id='files_uploaded']";
    this.downloadLink = "//a[@class = 'download-btn']";
    this.iframe = '.iframe-container';
    this.iframeDescription = 'h2 > strong';
    this.multiButton = "//div[contains(@class, '-buttons-container')]/button";
    this.multiSpan = "//div[contains(@class, '-buttons-container')]/span";
    this.delayButton = 'button.delay-btn';
    this.invisibleButton = 'button.invisible-btn';
    this.delaySpan = "//div[@class='delay-container']/span[contains(text(),'Delay finished!')]";
    this.invisibleSpan = 'div.invisible-button-container > span';
  }

  public uploadFile(filePath: string):void {
    cy.xpath(this.fileInput).then(($element) => {
      this.common.uploadFile($element, filePath);
    });
  }

  public uploadFileDragAndDrop(filePath: string):void {
    cy.xpath(this.fileDiv).then(($element) => {
      this.common.uploadFileDragAndDrop($element, filePath);
    });
  }

  public submit():void {
    cy.xpath(this.submitButton).click();
  }

  public checkUploadedFile():void {
    cy.xpath(this.resultText).should('have.text', 'test.ico\n');
  }

  public clickDownloadFile():void {
    cy.xpath(this.downloadLink).click();
  }

  public getIframe():void {
    cy.iframe(this.iframe);
  }

  public getIframeUsingGet():void {
    cy.get(this.iframe);
  }

  public getDescriptionInIframe():void {
    cy.iframe(this.iframe).find(this.iframeDescription)
      .should('contain.text', 'This is a Iframe block, which is going to be used for testing.');
  }

  public getDescriptionInIframeUsingGet():void {
    cy.get(this.iframe).its('0.contentDocument.body').then((body) => {
      cy.wrap(body).find(this.iframeDescription)
        .should('contain.text', 'This is a Iframe block, which is going to be used for testing.');
    });
  }

  public clickMultiButton():void {
    cy.xpath(this.multiButton).then(($elements) => {
      this.common.clickMultiple($elements, true);
    })

    cy.xpath(this.multiSpan).each((item) => {
      cy.wrap(item).should('have.text', 'Clicked!');
    });
  }

  public clickDelayButton():void {
    cy.get(this.delayButton).click().waitUntil(() => {
      cy.xpath(this.delaySpan).contains('');
    }, {
      errorMsg: 'Span was not found.',
      timeout: 20000,
      interval: 2000,
    });
  }

  public clickInvisibleButton(): void {
    cy.get(this.invisibleButton).then(($element) => {
      this.common.forceClick($element);
    });

    cy.get(this.invisibleSpan).should('contain.text', 'Clicked!');
  }

  public checkElementsAvailable(): void {
    cy.xpath('//body').then(($element) => {
      this.common.checkElementsAvailable($element, [
        this.fileInputSelector,
        this.fileDivSelector,
      ]).then((flag) => {
        expect(flag).eq(true);
      });
    });
  }

  public checkElementsNotAvailable(): void {
    cy.xpath('//body').then(($element) => {
      this.common.checkElementsAvailable($element, [
        this.fileInputSelector,
        this.fileDivSelector,
        'test',
      ]).then((flag) => {
        expect(flag).eq(false);
      });
    });
  }
}

export default ExampleWebPageObject;
