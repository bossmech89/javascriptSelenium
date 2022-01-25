const {Builder, By, Key, util} = require("selenium-webdriver");
const chromedriver = require('chromedriver');


let driver = new Builder().forBrowser("chrome").build();

async function checkBoxForm(){
    try {
        await driver.manage().window().maximize();
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/simple-registration");
        await driver.findElement(By.xpath("//a[@title='03.CheckBox Form']/span")).click();
        await driver.findElement(By.xpath("//input[@id='name']")).sendKeys("My reservation");
        await driver.findElement(By.xpath("//input[@id='comment']")).sendKeys("optional");
        await driver.findElement(By.xpath("//input[@value='two-bed-appartment']/following::span")).click();
        await driver.findElement(By.xpath("//nb-checkbox[@value='dinner']/label/span")).click();
        await driver.findElement(By.xpath("//button[@id='submit']")).click();
    } catch (error) {
        console.log(error);
    }
};

checkBoxForm();