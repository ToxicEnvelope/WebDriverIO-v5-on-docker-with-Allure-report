# WebDriverIO-v5-on-docker-with-Allure-report


Project for Webdriver IO v5 using [wdio-video-reporter](https://github.com/presidenten/wdio-video-reporter) and has a `docker-compose.yml` ready to spawn a selenium grid.

Checkout example Allure report with included video on failed tests here:
https://presidenten.github.io/wdio-video-reporter/

Installation
============

Install docker
--------------
- Mac https://download.docker.com/mac/stable/Docker.dmg
- Win https://download.docker.com/win/stable/Docker%20for%20Windows%20Installer.exe
- Linux `curl -fsSL https://get.docker.com -o get-docker.sh && sudo sh get-docker.sh && sudo usermod -aG docker $USER`

(Dont want docker? Follow this guide: https://webdriver.io/docs/selenium-standalone-service.html)

Prerequisites
-------------
We use SYSTEM ENVIRONMENT VARIABLES across our framework for security reasons.
You should add the following into your machine. (I assume we use Linux/Mac)
- `export USER_NAME="your.alis@domain.ext"`
- `export USER_PASSWORD="yourpassword"`

Install dependencies
--------------------

`yarn` or `npm install`

Usage
-----

Start docker hub with docker with command:
- `docker-compose up -d`
(If using selenium-standalone, then skip that line)

Check `http://localhost:4444/grid/console` and wait for chrome to register themselves.

To see whats going on in the browsers during the test, you can connect 
with a [vnc client](https://www.realvnc.com/en/connect/download/viewer/)
to `localhost:5901` for Chrome.

`@` is resolved to `src` to avoid `../../../`.... in the tests.

The idea with this setup is to name local tests (testing local webserver on localhost) 
`file.gui.js`, while e2e-tests that test external sites are named `file.e2e.js`.

Run tests with: `yarn gui` 

Check allure report with: `yarn report`

Clean up
--------

Shut down the docker grid with command:
- `docker-compose down`

How to
------

1. Add SYSTEM ENV VARIABLES
- `export USER_NAME="your.alias@domain.ext"`
- `export USER_PASWORD="yourpassword"`
2. Start up docker hub
- `docker-compose up -d`
3. Build node dependenceis
- `yarn`
4. Run GUI Test
- `yarn gui`
5. Open Allure report
- `yarn report`
6. Shut down docker grid
- `docker-compose down`

