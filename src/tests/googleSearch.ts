import { NightwatchBrowser } from 'nightwatch';
import { NightwachWebsitePage } from '../pages/NightwatchWebsitePage';
import { GoogleIndexPage } from '../pages/GoogleIndexPage';
import { GoogleSearchResultPage } from '../pages/GoogleSearchResultPage';

module.exports = {
  'search for "nightwatch"': (browser: NightwatchBrowser) => {
    const indexPage = new GoogleIndexPage(browser);
    const resultPage = new GoogleSearchResultPage(browser);

    indexPage
      .navigate()
      .waitForLoad()
      .search('nightwatch');
    resultPage.waitForLoad();
    browser.assert.containsText(resultPage.selectors.searchContents, 'Nightwatch.js').end();
  },

  'opening good luck result for "nightwatch"': (browser: NightwatchBrowser) => {
    const googleIndexPage = new GoogleIndexPage(browser);
    const nightwatchWebsitePage = new NightwachWebsitePage(browser);

    googleIndexPage
      .navigate()
      .waitForLoad()
      .goodLuck('nightwatch');
    nightwatchWebsitePage.waitForLoad();
    browser.assert.containsText(nightwatchWebsitePage.selectors.body, 'Nightwatch.js').end();
  }
};
