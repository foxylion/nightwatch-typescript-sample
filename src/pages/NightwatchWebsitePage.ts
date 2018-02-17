import { BasePage } from './BasePage';

export class NightwachWebsitePage extends BasePage {
  public selectors = {
    body: '//body'
  };

  protected pageLoadedElement = this.selectors.body;
}
