
selenium-server-debug-mode:
	java -Dwebdriver.chrome.driver=node_modules/.bin/chromedriver \
	     -Dwebdriver.gecko.driver=node_modules/.bin/geckodriver \
	     -jar node_modules/selenium-server/lib/runner/selenium-server-standalone-3.9.1.jar \
	     -debug

setup:
	# TMPDIR is required to get a non failing phantomjs installation
	TMPDIR=`pwd`/binaries yarn install

run-chrome:
	yarn run chrome

run-firefox:
	yarn run firefox