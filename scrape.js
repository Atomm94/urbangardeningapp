const url = 'https://www.zipdatamaps.com/';
const puppeteer = require('puppeteer');


const scrape = async (zipCode) => {
    const browser = await puppeteer.launch({
        headless: true,
        executablePath:'C:/Users/jointohire/Desktop/Urban Gardening App/node_modules/puppeteer/.local-chromium/linux-599821/chrome-linux/chrome',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.goto(url + `${zipCode}`);
    const teams = await page.evaluate(() => {
        const tds = Array.from(document.querySelectorAll('.table tbody td'));
        let add = [];
        let db = [];
        tds.map(td => db.push(td.textContent));
        for (let i=0; i<db.length; i++) {
            add.push({
                key: db[i],
                value: db[i+1]
            })
        }

        let result =  {
            zip: null,
            hardinessZone: add.filter(el1 => el1.key === '2012 Hardiness Zone')[0].value,
            firstFrost: add.filter(el1 => el1.key === 'Average First Frost Dates')[0].value,
            lastFrost:  add.filter(el1 => el1.key === 'Average Last Frost Dates')[0].value,
            primaryCounty: add.filter(el1 => el1.key === 'Primary County: ')[0].value
        };

        return result;
    })
    teams.zip = await zipCode;

    await browser.close();
    return JSON.stringify(teams);
};


exports.scrape = scrape;

