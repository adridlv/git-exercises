import Common from 'emergya-cypress/src/project-types/common';

class AmazonPageObject {
  removeCookies: string;
  searchBar: string;
  searchButton: string;
  selectStars: string;
  selectProduct: string;

  private common = Common.getInstance();

  private static amazon: AmazonPageObject;

  static getInstance(): AmazonPageObject {
    if (!AmazonPageObject.amazon) {
      AmazonPageObject.amazon = new AmazonPageObject();
    }

    return AmazonPageObject.amazon;
  }

  constructor() {
    //TODO sacar los selectores a un fichero externo (lib-gcp-main/pages/drupal/selectors)
    this.removeCookies = "/html/body/div[1]/span/form/div[3]/span[1]/span/input"
    this.searchBar = "//input[@id='twotabsearchtextbox']";
    //this.searchBar = "//html/body/div[1]/header/div/div[1]/div[2]/div/form/div[3]/div[1]/input"
    //this.searchButton = "//html/body/div[1]/header/div/div[1]/div[2]/div/form/div[4]/div/span/input"
    this.searchButton = "//button[@id='nav-search-submit-button']";
    this.selectStars = "//li[@id='p_72/831280031']/span/a/section/span";   
    this.selectProduct = "//*[@id='search']/div[1]/div[1]/div/span[1]/div[1]/div[3]/div/div/div/div/div/div/div[1]/div/span/a";
  }

  public rmvCookies():void {
    cy.xpath(this.removeCookies).click();
  }

  //TODO typeOnSearchNav
  public searchOnSearchNav(search: string):void {
    cy.xpath(this.searchBar).type(search);
  }


  public clickOnSearchButton():void {
    cy.xpath(this.searchBar).click({force: true});
  }

  public clickOnStars():void {
    cy.xpath(this.selectStars).click();
  }

  public clickOnProduct():void {
    cy.xpath(this.selectProduct).click();
  }

  public search(search: string){
    this.searchOnSearchNav(search);
    this.clickOnSearchButton();
  }


}

export default AmazonPageObject;
