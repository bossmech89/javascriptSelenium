const {Builder, By, Key, util} = require("selenium-webdriver");
const chromedriver = require('chromedriver');
const chrome = require("selenium-webdriver/chrome");
// const proxy = require("selenium-webdriver/proxy");
// const proxyServer = "200.192.210.174:8080";
const options = new chrome.Options();

// Open the google site and search the javascript
// async function googleSite() {
//     let driver = new Builder().forBrowser("chrome").build();
//     await driver.get("https://www.google.com/");
//     await findElement(By.name("q")).sendKeys("Javascript", Key.RETURN);
// };

// googleSite();

// Browser Options - download the csv file and store in desired place
// options.userPreference("browser.download.dir", "C:\\mySeleniumDownloads");
// options.userPreference("browser.download.folderList", 2);
// options.userPreference("browser.helperApps.neverAsk.saveToDisk", "application/x-csv");

// Set Proxy
// let driver = new Builder()
// .forBrowser("chrome")
// .setChromeOptions(options)
// .setProxy(proxy.manual({
//     http: proxyServer,
//     https: proxyServer
// }))
// .build();

// driver.get("https://whatismyipaddress.com/");

// Wait to finish the task
let driver = new Builder().forBrowser("chrome").build();

async function waitForTask(){
    try {
        await driver.get("http://www.google.com");
        await driver.get("http://www.facebook.com");
    } catch (error) {
        console.log(error);
    }
}

waitForTask();