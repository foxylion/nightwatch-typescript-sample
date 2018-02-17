import { NightwatchBrowser } from 'nightwatch';

export abstract class BasePage {
  public browser: NightwatchBrowser;

  constructor(browser: NightwatchBrowser) {
    this.browser = browser;
  }
}
