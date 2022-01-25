const {Builder, By, Key, util} = require("selenium-webdriver");
const chromedriver = require('chromedriver');


let driver = new Builder().forBrowser("chrome").build();

async function fileUploadForm(){
    try {
        await driver.manage().window().maximize();
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/simple-registration");
        await driver.findElement(By.xpath("//a[@title='06.File Upload Form']/span")).click();
        await driver.findElement(By.xpath("//input[@formcontrolname='file']")).sendKeys(__dirname,"\\exampleFile.jpg");
        await driver.findElement(By.xpath("//button[@id='submit']")).click();
    } catch (error) {
        console.log(error);
    }
};

fileUploadForm();