import { BasePage } from './BasePage';

export class GoogleSearchResultPage extends BasePage {
  public selectors = {
    searchContents: '//div[@id="search"]'
  };

  protected pageLoadedElement = this.selectors.searchContents;
}
