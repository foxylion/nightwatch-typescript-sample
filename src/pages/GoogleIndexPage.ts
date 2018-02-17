import { BasePage } from './BasePage';

export class GoogleIndexPage extends BasePage {
  public selectors = {
    searchField: '//input[@name="q"]',
    searchButton: '//input[@name="btnK"]',
    goodLuckButton: '//input[@name="btnI"]'
  };

  protected url = 'https://google.com';
  protected pageLoadedElement = '//body';

  public search = (query: string) => {
    this.browser
      .setValue(this.selectors.searchField, query)
      .keys([this.browser.Keys.ESCAPE]) // Closes auto completion which might obscure search button
      .click(this.selectors.searchButton);
    return this;
  };

  public goodLuck = (query: string) => {
    this.browser
      .setValue(this.selectors.searchField, query)
      .keys([this.browser.Keys.ESCAPE]) // Closes auto completion which might obscure good luck button
      .click(this.selectors.goodLuckButton);
    return this;
  };
}
