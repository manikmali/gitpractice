import {test, chromium, expect} from '@playwright/test'

test(`Launch a Naukri URL`, async() => {
    
const browser = await chromium.launch()     //Launch browser and open a website.
const context = await browser.newContext()
const page1 = await context.newPage()
const page2 = await context.newPage()

await page1.goto('https://www.naukri.com/')  
await page2.goto('https://www.google.com/')
await page2.goto('https://www.redbus.in/')  //Navigate to another URL.


await new Promise(resolve => setTimeout(resolve, 2000))
await page2.reload()       //Refresh the page 

await page2.goBack()    //Navigate back and forward.
await page2.waitForTimeout(2000)
await page2.goForward()
await page2.waitForTimeout(2000)

await expect.soft(page2).toHaveTitle(/Bus Booking Online/) //Verify page title
expect(await page2.title()).toContain('Bus Booking Online')
console.log(`${await page2.title()}`)

await expect.soft(page2).toHaveURL(/redbus/) //Verify current URL
console.log(`${page2.url()}`)

})