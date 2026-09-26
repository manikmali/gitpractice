import {test, expect} from "@playwright/test"

test(`Verify the multiple windows and tabs`, async({page, context}) => {

    await page.goto('https://onlinesbi.sbi.bank.in/')

    const newPage = context.waitForEvent('page')
    await page.locator(`//span[text()='Lock & Unlock User']`).click()

    const childPage = await newPage
    console.log(childPage.url())

    await childPage.waitForTimeout(5000)

})

test(`Verify the multiple windows / tabs`, async({page, context}) => {

    await page.goto('https://onlinesbi.sbi.bank.in/')

    await Promise.all([context.waitForEvent('page'), page.locator(`//span[text()='Lock & Unlock User']`).click()])
    await Promise.all([context.waitForEvent('page'), page.locator(`//span[text()='New Corporate Registration']`).click()])       
    const Pages =  context.pages()

    await page.waitForLoadState(`domcontentloaded`)
    for (const i in Pages) {
        console.log( Pages[i].url())
    }

})

test.use({permissions: ['geolocation', 'notifications', 'camera', 'microphone', ]})


test.only(`Verify the IRCTC page`, async({page, context}) => {
     

    // 1. Go to IRCTC site
    await page.setViewportSize({ width: 1536 , height: 730 });
    await page.goto('https://www.irctc.co.in/nget/train-search');
    // await page.pause()

    // 2. Wait for Angular to finish rendering
    await page.waitForSelector(`//nav[@class="nav-bar hidden-xs text-right"]`, { timeout: 3000 });

    // 3. Interact with LOGIN / REGISTER
    const walletButton = page.locator('text= E-WALLET ').first();
    await expect(walletButton).toBeVisible();

    await page.locator(`//button[text()='English']`).click()
 
    
    const [childPage] = await Promise.all([context.waitForEvent('page'), page.locator(`//a[@aria-label="I.R.C.T.C. e.Wallet"]`).hover(), 
        page.locator(`//span[text()='IRCTC eWallet User Guide']`).click() ])

    // const [childPage] = await Promise.all([context.waitForEvent('page'), page.locator(`//a[@aria-label="I.R.C.T.C. e.Wallet"]`)
    //     .filter({hasText: 'IRCTC eWallet User Guide'}).click() ])

    // const childPage = context.pages()
    await childPage.waitForLoadState("domcontentloaded")
    await childPage.bringToFront()
    console.log(childPage.url())
    await page.waitForTimeout(5000)




})

