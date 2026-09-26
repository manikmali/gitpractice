import {test, expect, chromium} from '@playwright/test'

// test(`Verify the dropdown options`, async({page}) => {
//     await page.goto(`https://www.htmlelements.com/demos/dropdownlist/multiple-selection-mode/`)

//     const frameloc = page.frameLocator('iframe.demo-frame')
//     // await frameloc.loc

//     await frameloc.locator(`smart-drop-down-list.smart-element`).click()

//     const names = ["Angel", "Dimitar", "Michael", "Natalia"];

//         for (const name of names) {
//             await page.keyboard.down('Control');
//             await frameloc.locator(`smart-list-item[label="${name}"]`).click();
//         }
//         await page.keyboard.press(`Escape`)
    
//     await page.waitForTimeout(5000)
// })


// test(`Verify the bus booking in redbus`, async({page}) => {
//     await page.goto(`https://www.redbus.in/`)

//     await page.fill(`input#srcinput`,'Chennai')
//     await page.click('//div[@aria-label="Koyambedu"]')

//     await page.fill(`input#destinput`,'Mayiladuthurai')
//     await page.click('//div[@aria-label="Mayiladuthurai"]')
    
//     await page.click('//div[@aria-label="Select date of journey"]')
//     const dates = page.locator(`//li[contains(@class, "dateItem")]//div[@aria-disabled="false"]`)
//     const dates_count = await dates.count()

//     for (let i=0; i<dates_count; i++) {
//         console.log(await dates.nth(i).getAttribute(`aria-label`))
//     }

//     await page.waitForTimeout(5000)

// })

const userDataDir = `./myuserdata`

test(`Verify user login to gmail using persistent context`, async() => {

    const browser = await chromium.launchPersistentContext(userDataDir, {
        headless: false,
        channel: 'chrome',
        permissions: ['notifications'],
        // httpCredentials: {
        //     username: 'manimalim1982@gmail.com',
        //     password: 'Mgm@1710'
        // }
    })

    const page = await browser.newPage()
    await page.goto(`https://mail.google.com/`)
    await Promise.all([browser.waitForEvent('page'), page.locator(`(//span[text()='Sign in'])[1]`).click()])
    const pages = browser.pages()
    await page.waitForLoadState(`domcontentloaded`)

    console.log(pages[2].url())
    await page.waitForTimeout(10000)

})

test.only(`Verify mocking the API response`, async({page}) => {


    await page.goto(`https://leaftaps.com/opentaps/control/main`)
    await page.getByRole('textbox', {name: 'Username'}).fill(`Demosalesmanager`)
    await page.getByRole('textbox', {name: 'Password'}).fill(`crmsfa`)

    await page.getByRole('button', {name: 'Login'}).click()
    await page.getByRole('link', {name: 'CRM/SFA'}).click()

    // const endpoint = ``
    const tags = {
        "total": 640,
        "items": [
            {
                "__PERM_CREATE": false,
                "__PERM_UPDATE": false,
                "__PERM_DELETE": false
            },
            {
                "partyId": "10054",
                "companyName": "Test Leaf",
                "firstName": "Manikandan",
                "lastName": "M",
                "statusDescription": "Assigned",
                "formatedPrimaryPhone": "",
                "friendlyPartyName": "Ramya Kathir (10054)",
                "voipEnabled": "N",
                "__PERM_CREATE": false,
                "__PERM_UPDATE": false,
                "__PERM_DELETE": false
            },
            {
                "partyId": "10055",
                "companyName": "large language models",
                "firstName": "Rama",
                "lastName": "R",
                "statusDescription": "Assigned",
                "formatedPrimaryPhone": "",
                "friendlyPartyName": "Thomas Stark (10055)",
                "voipEnabled": "N",
                "__PERM_CREATE": false,
                "__PERM_UPDATE": false,
                "__PERM_DELETE": false
            },
        ],
        "identifier": "partyId"
    }

    await page.route(`**/*/control/gwtFindLeads`, async route => {
        await route.fulfill({
            body: JSON.stringify(tags)
        })
    
    })

    await page.getByRole('link', {name: 'Leads'}).click()
    await expect(page.getByRole('link', {name: 'Rama'})).toBeVisible()

    // await page.waitForTimeout(5000)
    // await page.pause()


})