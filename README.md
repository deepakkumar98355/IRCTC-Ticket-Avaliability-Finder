# IRCTC-Ticket-Avaliability-Finder

Node JS script to automated the IRCTC ticket availability using puppeteer Headless Chrome Node API 
Sample script to automate any website using XPATH selector to automate user login and grab required data .

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.
step 1: npm install 
step 2: node ticketFnder.js 

### Prerequisites

Pupeeter needs node gyp to externally run python and C++ embedded library codes in case getting any error to that node gyp ,java envrionment variable needs to be set accordingly .

```
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
  
 })();
 
//For click :
await page.evaluate(() => {
  document.querySelector('button[type=submit]').click();
});
```

## Built With

* https://github.com/GoogleChrome/puppeteer
* https://www.npmjs.com/package/interval-promise
* https://github.com/apifytech/proxy-chain


## Authors

* **Deepak Kumar** - *Initial work* - [deepakkumar98355](https://github.com/deepakkumar98355)


## Further Enhancement

* Can be enhanced to automate website to grab some specific information


