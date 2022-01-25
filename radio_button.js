const {Builder, By, Key, util} = require("selenium-webdriver");
const chromedriver = require('chromedriver');


let driver = new Builder().forBrowser("chrome").build();

async function radioButton(){
    try {
        await driver.manage().window().maximize();
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/simple-registration");
        await driver.findElement(By.css("ul > li.menu-item.ng-tns-c6-2.ng-tns-c6-0.ng-star-inserted > a > span")).click();
        await driver.findElement(By.css("#title")).sendKeys("Title should contain minimum 20 words");
        await driver.findElement(By.css("#description")).sendKeys("Description should contain minimum 20 words");
        await driver.findElement(By.css("div:nth-child(1) > label > span.custom-control-indicator")).click();
        await driver.findElement(By.css("#submit")).click();
    } catch (error) {
        console.log(error);
    }
};

radioButton();