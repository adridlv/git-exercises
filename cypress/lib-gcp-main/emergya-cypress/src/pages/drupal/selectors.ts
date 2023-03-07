/**
 * Main selectors for drupal(can be extended in custom implementations).
 *
 * @author Ángel Cárdenas | acardenas
 */
// declare as let to be changed in a child project
const Selectors = {
  loginDrupal: {
    inputUser: '//*/input[@id=\'edit-name\']',
    inputPass: '//*/input[@id=\'edit-pass\']',
    buttonLogin: '(//*/input[@id=\'edit-submit\'])[1]',
  },
  contentPageAdmin: {
    iconFilter: 'a[class=\'btn btn-floating\']',
    inputFilterTitle: "/*//input[@id='edit-title']",
    inputFilterType: "(/*//input[@class='select-dropdown dropdown-trigger'])[1]",
    buttonFilter: "//*/input[@id='edit-submit-content']",
    selectSpan: "//*/span[text()='Media resources']",
    listsContentTitles: "//*/td[@class='views-field views-field-title']",
    firstElementContentTitles: "(//*/td[@class='views-field views-field-title'])[1]",
  },
  primaryTab: {
    buttonEdit: "//*/ul[@class='tabs primary']/li/a[contains(@href, '/edit')]",
  },
  redirect: {
    dropdownRedirect: "//*[@aria-controls='edit-url-redirects']",
    buttonAddRedirect: "//*/li[@class='add']/a",
    inputPathRedirect: "//*/input[@id='edit-redirect-source-0-path']",
    selectLanguage: '#edit-language-0-value',
    warningExistUrl: '#redirect-link-status > div',
    dropdownAction: '#edit-table > tbody > tr > td:nth-child(2) > div > div > ul > li.dropbutton-toggle > button',
    deleteAction: "//*[@id=\"edit-table\"]//li[@class='delete dropbutton-action secondary-action']",
    buttonDelete: "//*/input[@id='edit-submit']",
    verisureTheme: {
      actionIcon: "//*/a[@class='dropdown-button btn-flat ellipsis-icon']",
      deleteOption: "//*/li[@class='delete']",
    },
  },
};

export default Selectors;
