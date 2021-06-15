const puppeteer = require('puppeteer');

var x = new Array(); 
async function scrapeProduct() {
  
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://randommer.io/random-songs');

    const [el] = await page.$x('/html/body/div[1]/main/div[4]/div[1]/div/a');
    
    const href = await el.getProperty('href');
    const result = await href.jsonValue();
    browser.close();
    x.push(result);
    return await result;
   
}
scrapeProduct();

console.log(scrapeProduct());



