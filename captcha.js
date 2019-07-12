const puppeteer = require('puppeteer');

// Start Puppeteer
let scrape = async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

    // Enter Gmail + Password
    await page.goto('https://www.gmail.com/');
    await page.keyboard.type('garrettg3005@gmail.com')
    await page.keyboard.press('Enter');
    await page.keyboard.type("Gman1998!");
    await page.waitFor(2000);
    // Go to Youtube
    await page.goto('https://youtube.com/');
    await page.focus('#search');
    await page.click('#search');
    // Search Youtube
    await page.keyboard.type('How to be a bot');
    await page.keyboard.press('Enter');
    await page.waitFor(1000);
    await page.goto("https://www.supremenewyork.com/shop/all");
    await page.click('#container > article:nth-child(2) > div > a > img');
    // Go to Google Shopping
    await page.goto('https://www.google.com/shopping');
    await page.focus('#gsr');
    page.waitFor(1500);
    await page.keyboard.type('golf clubs for sale');
    await page.keyboard.press('Enter');

    // Click First Video

};

scrape().then((value) => { // Success!
});
