const puppeteer = require('puppeteer');
const firebase = require ("./firebase");
var foo1 = require('./server');


const db = firebase.firestore();


async function scrapeProduct(url) {
  
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    // Grab video ID
    const [el] = await page.$x('/html/body/div/main/div[4]/div[1]/div/a');
    const href = await el.getProperty('href');
    const result = await href.jsonValue();
    // Grab video Title
    const [el1] = await page.$x('/html/body/div/main/div[4]/div[1]/div/a/div');
    const txt = await el1.getProperty('textContent');
    const result1 = await txt.jsonValue();
    // Convert the results into a string 
    let youRl1 = String(result1);
    let youRl = String(result);
    
    browser.close();
    // Run function passing results
    saveUrl(youRl, youRl1);
}


//Declare arrays storing the id and title of each video.
var x = new Array();
var y = new Array();


let randomUrl = {
    id: y, 
    thisUrl: x
}

function saveUrl(data, data1){
 
    x.push(data.substring('https://www.youtube.com/watch?v='.length));
    y.push(data1);
    if (x.length + y.length < 20){
        console.log("Not enough items yet");
        console.log(x);
        scrapeProduct('https://randommer.io/random-songs');
    }
    /*if (x.length > 4){
        x.splice(0,4);
    }
    if (y.length > 4){
        y.splice(0,4);
    }
    */
    
}



 scrapeProduct('https://randommer.io/random-songs');

module.exports = {
    scrapeProduct,
    saveUrl,
    x,
    randomUrl,
    y
   
}