import { BasePage } from './BasePage';

export class GoogleSearchResultPage extends BasePage {
  public selectors = {
    searchContents: '//div[@id="search"]'
  };

  public waitFor = () => {
    this.browser.waitForElementVisible(this.selectors.searchContents, 2000);
    return this;
  };
}
