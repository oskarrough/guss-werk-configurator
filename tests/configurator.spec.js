const puppeteer = require('puppeteer');
/*const Configurator = require('./configurator')*/

describe("Test clothes-configurator", () => {
  beforeAll( async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000');
  });

  it("checks if clothes-configurator is on DOM", async () => {

    await page.evaluate(() => {
      const Configurator = document.registerElement("clothes-configurator");
      document.body.appendChild(new Configurator());
    })
    await expect(page).toMatchElement("clothes-configurator");

  });
})
