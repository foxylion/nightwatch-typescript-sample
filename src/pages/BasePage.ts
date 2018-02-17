import { NightwatchBrowser } from 'nightwatch';

export abstract class BasePage {
  protected url: string | undefined = undefined;
  protected pageLoadedElement: string | undefined = undefined;
  protected navigateCompleteTimeout: number = 1000;

  protected browser: NightwatchBrowser;

  constructor(browser: NightwatchBrowser) {
    this.browser = browser;
  }

  public navigate = () => {
    if (!this.url) {
      throw new Error('Page does not support navigating manually.');
    }
    this.browser.url(this.url);
    return this.waitForLoad();
  };

  public waitForLoad = () => {
    if (this.pageLoadedElement) {
      this.browser.waitForElementVisible(this.pageLoadedElement, this.navigateCompleteTimeout);
    }
    return this;
  };
}
