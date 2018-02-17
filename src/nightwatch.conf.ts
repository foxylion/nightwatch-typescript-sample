require('babel-register');

import { NightwatchOptions, NightwatchTestSettingScreenshots } from 'nightwatch';

const defaultTestSettings: NightwatchTestSettingScreenshots = {
  launch_url: 'http://127.0.0.1',
  selenium_host: '127.0.0.1',
  selenium_port: 4444,
  cli_args: {},
  username: '',
  access_key: '',
  proxy: '',
  globals: {},
  exclude: [],
  log_screenshot_data: false,
  use_xpath: true,
  end_session_on_fail: true,
  skip_testcases_on_fail: false,
  filter: '',
  silent: true,
  output: true,
  disable_colors: false,
  screenshots: {
    enabled: false,
    path: ''
  },
  desiredCapabilities: {
    handlesAlerts: true
  }
};

const config: NightwatchOptions = {
  src_folders: ['./build/tests'],
  output_folder: './reports',
  custom_commands_path: '',
  custom_assertions_path: '',
  page_object_path: '',
  globals_path: '',

  selenium: {
    start_process: true,
    start_session: true,
    host: '127.0.0.1',
    port: 4444,
    server_path: './node_modules/selenium-server/lib/runner/selenium-server-standalone-3.9.1.jar',
    log_path: '',
    cli_args: {
      'webdriver.chrome.driver': './node_modules/.bin/chromedriver',
      'webdriver.gecko.driver': './node_modules/.bin/geckodriver',
      'webdriver.edge.driver': ''
    }
  },

  test_settings: {
    firefox: {
      ...defaultTestSettings,
      desiredCapabilities: {
        browserName: 'firefox',
        handlesAlerts: true
      }
    },
    chrome: {
      ...defaultTestSettings,
      desiredCapabilities: {
        browserName: 'chrome',
        handlesAlerts: true
      }
    }
  }
};

module.exports = config;
