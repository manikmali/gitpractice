import {test, expect} from '@playwright/test'

test(`Verify the multiple pages scenarios`, async({page, context}) => {

    await page.goto(`https://www.flipkart.com/`);

    await page.pause()

    const searchBox = page.getByRole('textbox',{name: `Search for products, brands and more`})
    await searchBox.fill(`Phones`);
    await searchBox.press("Enter");
    await page.locator('label:has-text("MOTOROLA")').click();

    const newPage = context.waitForEvent('page') // enable a listener before an event occurs // click action
    await page.locator(`//div[text()="MOTOROLA g06 power (Pantone Tendril, 64 GB)"]`).click()
    

    const childPage = await newPage
    const title = await childPage.title()

    // const [childPage] = await Promise.all([context.waitForEvent('page'), page.locator(`//div[text()="MOTOROLA g06 power (Pantone Tendril, 64 GB)"]`).click()]) // array of promise resolved
    //Here the pages are captured using the concept called destructuring of array to resolve the promise of all the actions performed

    console.log(title);
    
    await page.bringToFront(); // page => parent page

    await page.locator(`//span[text()="Electronics"]`).click()

    await page.waitForTimeout(3000)

    await childPage.bringToFront();

})