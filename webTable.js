const { Builder, By, Key, util } = require("selenium-webdriver");
const chromedriver = require('chromedriver');


let driver = new Builder().forBrowser("chrome").build();

async function webTable() {
    let results = [];
    try {
        await driver.manage().window().maximize();
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/simple-registration");
        await driver.findElement(By.xpath("//a[@title='Tables Practice']")).click();
        await driver.findElement(By.xpath("//a[@title='01.Smart Table']/span")).click();
        for (let i = 0; 0 < 6; index++) {
            let rows = await driver.findElement(By.xpath("//table//tbody//tr"));
            for (const row of rows) {
                let rowsData = await row.getText();
                let rowsSpecificData = await rowsData.split("/\n/");
                results.push({
                    id: rowsSpecificData[0],
                    firstName: rowsSpecificData[1],
                    lastName: rowsSpecificData[2],
                    userName: rowsSpecificData[3],
                    email: rowsSpecificData[4],
                    age: rowsSpecificData[5]
                })
            }
            await driver.findElement(By.css(".page-link-next")).click();
        }
        console.table(results);
    } catch (error) {
        console.log(error);
    }
};

webTable();