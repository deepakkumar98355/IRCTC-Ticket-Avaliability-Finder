const puppeteer = require('puppeteer');
const interval = require('interval-promise');
const proxyChain = require('proxy-chain');
const fs = require('fs');

const targetURL = "https://www.irctc.co.in/nget/train-search"; //change website here
const originSelector = "#origin";
const destinationSelector = "#destination";

const originStation = "MAS"; //enter origin here
const destinationStation = "BKSC"; //enter destination here
var browserOBJ = null;

async function findTicketAvaliability() {
    const browser = await puppeteer.launch({
        headless: false,
        // executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        args: [
            //`--proxy-server=${newProxyUrl}`,
            `--user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36`

        ],
    });
    browserOBJ = browser;
    const page = await browser.newPage();
    // const page = await newPageWithNewContext(browser);
    await page.setViewport({
        width: 1366,
        height: 768
    })

    await browser.on('targetcreated', async () => {
        try {
            const pageList = await browser.pages();
            pageList.forEach((page) => {
                page._client.send('Page.setDownloadBehavior', {
                    behavior: 'allow',
                    downloadPath: './',
                });
            });
        } catch (e) {
            console.log("targetcreated", e);
        }

    });

    try {
        await page.goto(targetURL, {
            timeout: 0,
            waitUntil: "networkidle2"
        });
        await page.waitFor(10 * 1000);
        console.log("entered target website");
        await page.click(originSelector);
        await page.type(originSelector, originStation, {
            delay: 100
        });
        await page.type(originSelector, String.fromCharCode(13), {
            delay: 100
        });
        await page.click(destinationSelector);
        console.log("filled the details");
        await page.type(destinationSelector, destinationStation, {
            delay: 100
        });
        await page.type(destinationSelector, String.fromCharCode(13), {
            delay: 100
        });

        //await checkCaptcha(page);
        const [searchPage] = await page.$x('//*[@id="divMain"]/div/app-main-page/div[2]/div/div[1]/div/div/div[1]/div/app-jp-input/div[3]/form/div[7]/button');
        await clickEle(searchPage, page);
        console.log("Clicked search");

        const [checkAvailability] = await page.$x('//*[@id="check-availability"]');
        await clickEle(checkAvailability, page);
        console.log("checked Availability");

    } catch (err) {
        console.log("First time error:", err);
        await tryAgain(page);
    }
}

async function clickEle(element, page) {
    return await page.evaluate(el => {
        return el.click();
    }, element);
}

findTicketAvaliability();