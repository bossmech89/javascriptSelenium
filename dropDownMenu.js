const {Builder, By, Key, util} = require("selenium-webdriver");
const chromedriver = require('chromedriver');


let driver = new Builder().forBrowser("chrome").build();

async function dropDownMenu(){
    try {
        await driver.manage().window().maximize();
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/simple-registration");
        await driver.findElement(By.xpath("//a[@title='04.Dropdown Menu Form']/span")).click();
        const multipleDropdown = await driver.findElement(By.xpath("//nb-select[@formcontrolname='select1']"));
        await multipleDropdown.click();
        await driver.findElement(By.xpath("//nb-option[@value='1']")).click();
        await driver.findElement(By.xpath("//nb-option[@value='4']")).click();
        await multipleDropdown.click();
        await driver.findElement(By.xpath(`//select[@formcontrolname='select2']/option[@value="0: 'volvo'"]`)).click();
        await driver.findElement(By.xpath(`//select[@formcontrolname='select2']/option[@value="2: 'opel'"]`)).click();
        const singleDropdown = await driver.findElement(By.xpath("//nb-select[@formcontrolname='select3']/button"));
        await singleDropdown.click();
        await driver.findElement(By.xpath("//nb-option[@value='3']")).click();
        await driver.findElement(By.xpath("//select[@formcontrolname='select4']")).click();
        await driver.findElement(By.xpath("//select[@formcontrolname='select4']/option[@value='saab']")).click();
        await driver.findElement(By.xpath("//button[@id='submit']")).click();
    } catch (error) {
        console.log(error);
    }
};

dropDownMenu();