import { BasePage } from './BasePage';

export class NightwachWebsitePage extends BasePage {
  public selectors = {
    body: '//body'
  };

  public waitFor = () => {
    this.browser.waitForElementVisible(this.selectors.body, 2000);
    return this;
  };
}
