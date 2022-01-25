const { Builder, By, Key, util } = require("selenium-webdriver");
const chromedriver = require('chromedriver');


let driver = new Builder().forBrowser("chrome").build();

async function iframe() {
    // try {
    //     await driver.manage().window().maximize();
    //     await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/iframe-form");
    //     await driver.switchTo().frame(0);
    //     await driver.findElement(By.xpath("//input[@class='quantumWizTextinputPaperinputInput exportInput']")).sendKeys("Baskar");
    //     await driver.actions().sendKeys(Key.TAB).perform();
    //     await driver.actions().sendKeys(Key.chord(
    //         Key.ARROW_DOWN, 
    //         Key.ARROW_DOWN,
    //         Key.ARROW_DOWN)).perform();
    //     await driver.actions().sendKeys(Key.chord(Key.TAB, Key.TAB)).perform();
    //     await driver.actions().sendKeys(Key.ARROW_DOWN).perform();
    //     await driver.actions().sendKeys(Key.ARROW_DOWN).perform();
    //     await driver.actions().sendKeys(Key.SPACE).perform();
    //     await driver.actions().sendKeys(Key.TAB, "07").perform();
    //     await driver.actions().sendKeys(Key.TAB, "02").perform();
    //     await driver.actions().sendKeys(Key.TAB, "2021").perform();
    //     await driver.actions().sendKeys(Key.chord(Key.TAB, Key.SPACE)).perform();
    //     await driver.actions().sendKeys(Key.chord(Key.TAB, Key.SPACE)).perform();
    //     await driver.actions().sendKeys(Key.chord(Key.TAB, "Good")).perform();
    //     await driver.actions().sendKeys(Key.chord(Key.TAB, Key.SPACE)).perform();
    // } catch (error) {
    //     console.log(error);
    // }
    try {
        await driver.manage().window().maximize();
        await driver.get(
          "https://rori4.github.io/selenium-practice/#/pages/practice/iframe-form"
        );
        await driver.switchTo().frame(0);
        await driver
          .findElement(By.xpath("//input[@class='quantumWizTextinputPaperinputInput exportInput']"))
          .sendKeys("Rangel Stoilov");
        await driver.findElement(By.xpath("//div[@class='appsMaterialWizToggleRadiogroupOnRadio exportInnerCircle']")).click();
        await driver.actions().sendKeys(
            Key.chord(
              Key.ARROW_DOWN,
              Key.ARROW_DOWN,
              Key.ARROW_DOWN,
              Key.ARROW_DOWN
            )
          ).perform();
          await driver.actions().sendKeys(Key.chord(Key.TAB,Key.TAB)).perform();
          await driver.actions().sendKeys(Key.chord(Key.ARROW_DOWN)).perform();
          await driver.actions().sendKeys(Key.chord(Key.ARROW_DOWN)).perform();
          await driver.actions().sendKeys(Key.chord(Key.ARROW_DOWN)).perform();
          await driver.actions().sendKeys(Key.chord(Key.SPACE)).perform();
          await driver.actions().sendKeys(Key.chord(Key.TAB,"08")).perform();
          await driver.actions().sendKeys(Key.chord(Key.TAB,"26")).perform();
          await driver.actions().sendKeys(Key.chord(Key.TAB,"1991")).perform();
          await driver.actions().sendKeys(Key.chord(Key.TAB,Key.SPACE)).perform();
          await driver.actions().sendKeys(Key.chord(Key.TAB,Key.SPACE)).perform();
          await driver.actions().sendKeys(Key.chord(Key.TAB,"Secret answer")).perform();
          await driver.actions().sendKeys(Key.chord(Key.TAB,Key.SPACE)).perform();
      } catch (error) {
        console.log(error);
      }
};

iframe();