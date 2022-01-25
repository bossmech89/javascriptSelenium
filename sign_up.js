const {Builder, By, Key, util} = require("selenium-webdriver");
const chromedriver = require('chromedriver');

let driver = new Builder().forBrowser("chrome").build();

async function signUp(){
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/simple-registration");
        await driver.findElement(By.name("email")).sendKeys("example@gmail.com");
        await driver.findElement(By.name("password")).sendKeys("Test@1234");
        await driver.findElement(By.name("submit")).click();
    } catch (error) {
        console.log(error);
    }
};

signUp();