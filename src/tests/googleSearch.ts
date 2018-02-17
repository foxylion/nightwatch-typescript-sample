import { NightwatchBrowser } from 'nightwatch';
import { NightwachWebsitePage } from '../pages/NightwatchWebsitePage';
import { GoogleIndexPage } from '../pages/GoogleIndexPage';
import { GoogleSearchResultPage } from '../pages/GoogleSearchResultPage';

module.exports = {
  'search for "nightwatch"': (browser: NightwatchBrowser) => {
    const indexPage = new GoogleIndexPage(browser);
    const resultPage = new GoogleSearchResultPage(browser);

    indexPage.open().search('nightwatch');
    resultPage.waitFor();
    browser.assert.containsText(resultPage.selectors.searchContents, 'Nightwatch.js').end();
  },

  'opening good luck result for "nightwatch"': (browser: NightwatchBrowser) => {
    const googleIndexPage = new GoogleIndexPage(browser);
    const nightwatchWebsitePage = new NightwachWebsitePage(browser);

    googleIndexPage.open().goodLuck('nightwatch');
    nightwatchWebsitePage.waitFor();
    browser.assert.containsText(nightwatchWebsitePage.selectors.body, 'Nightwatch.js').end();
  }
};
