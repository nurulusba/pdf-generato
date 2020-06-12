const puppeteer = require('puppeteer');
const createPdf = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const options = {
        path : 'sample.pdf' , 
        format : 'A4'
    } ;

    await page.goto('http://wikipedia.com' , {waitUntil })
}