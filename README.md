# IRCTC-Ticket-Avaliability-Finder
Node JS script to automated the IRCTC ticket availability using puppeteer Headless Chrome Node API 
Sample script to automate any website using XPATH selector to automate user login and grab required data .

step 1: npm install 



step 2: node ticketFnder.js 


>> Note : Pupeeter needs node gyp to externally run python and C++ embedded library codes in case getting any error to that node gyp ,java envrionment variable needs to be set accordingly .

Can be enhanced using proxy chain ,added node library for that already.

##Usage

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();


For click :

await page.evaluate(() => {
  document.querySelector('button[type=submit]').click();
});
