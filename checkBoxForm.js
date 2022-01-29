const { Builder, By } = require("selenium-webdriver");
const chromedriver = require('chromedriver');
const should = require("chai").should();
const expect = require("chai").expect;
var mocha = require("mocha")
var describe = mocha.describe
var it = mocha.it


let driver = new Builder().forBrowser("chrome").build();

// async function checkBoxForm(){
//     try {
//         await driver.manage().window().maximize();
//         await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/simple-registration");
//         await driver.findElement(By.xpath("//a[@title='03.CheckBox Form']/span")).click();

//         // assert using node assertion - validate checkboxForm text
//         let checkboxFormText = "Checkbox Form Example (Reservation)";
//         let checkboxTitle = await driver.findElement(By.css(".col-lg-6 nb-card nb-card-header")).getText();
//         checkboxTitle.should.equal(checkboxFormText);

//         await driver.findElement(By.xpath("//input[@id='name']")).sendKeys("My reservation");
//         await driver.findElement(By.xpath("//input[@id='comment']")).sendKeys("optional");
//         await driver.findElement(By.xpath("//input[@value='two-bed-appartment']/following::span")).click();
//         await driver.findElement(By.xpath("//nb-checkbox[@value='dinner']/label/span")).click();
//         await driver.findElement(By.xpath("//button[@id='submit']")).click();
//     } catch (error) {
//         console.log(error);
//     }
// };

// checkBoxForm();

// Using Mocha framework
describe("Validate the checkbox form", () => {
    it("Validate the checkbox form details", async () => {
        await driver.manage().window().maximize();
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/simple-registration");
        await driver.findElement(By.xpath("//a[@title='03.CheckBox Form']/span")).click();

        // assert using node assertion - validate checkboxForm text
        let checkboxFormText = "Checkbox Form Example (Reservation)";
        let checkboxTitle = await driver.findElement(By.xpath("//div[@class='col-lg-6']//nb-card//nb-card-header")).getText().then((value) => {
            return value;
        });
        checkboxTitle.should.equal(checkboxFormText);

        await driver.findElement(By.xpath("//input[@id='name']")).sendKeys("My reservation");
        await driver.findElement(By.xpath("//input[@id='comment']")).sendKeys("optional");
        await driver.findElement(By.xpath("//input[@value='two-bed-appartment']/following::span")).click();
        await driver.findElement(By.xpath("//nb-checkbox[@value='dinner']/label/span")).click();
        await driver.findElement(By.xpath("//button[@id='submit']")).click();
    });
})
