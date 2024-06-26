// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Login (Negative Scenario) and Password Reset', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Login (Negative Scenario) and Password Reset', async function() {
    await driver.get("http://localhost:3000/")
    await driver.manage().window().setRect({ width: 1552, height: 832 })
    await driver.findElement(By.css(".nav-button:nth-child(2)")).click()
    await driver.findElement(By.linkText("Login")).click()
    await driver.findElement(By.name("email")).click()
    await driver.findElement(By.name("email")).sendKeys("desilvahiruna72@gmail.com")
    await driver.findElement(By.name("password")).click()
    await driver.findElement(By.name("password")).sendKeys("Hii12345")
    await driver.findElement(By.css(".sc-qZrbh")).click()
    await driver.findElement(By.linkText("Reset it")).click()
    await driver.findElement(By.name("email")).click()
    await driver.findElement(By.name("email")).sendKeys("desilvahiruna72@gmail.com")
    await driver.findElement(By.css(".sc-qZrbh")).click()
  })
})