const {Builder, By, key, util} = require("selenium-webdriver");
const chrome = require("chromedriver");

let driver = new Builder().forBrowser("chrome").build();

// Maximize the window size
driver.manage().window().maximize();

driver.get("https://www.google.com/");
// driver.quit();
