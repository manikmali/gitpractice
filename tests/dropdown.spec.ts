import {test, expect} from '@playwright/test'

test('Select a dropdown value by visible/value text', async({page}) => {

    await page.goto(`https://leafground.com/select.xhtml`)
    await page.reload({timeout:3000})

    // const dropdown = page.locator(`.ui-selectonemenu>option`)
    // const dropdown_count = await dropdown.count()

    // for (let i=0; i<dropdown_count; i++) {
    //     console.log(await dropdown.nth(i).innerText())        
    // }
    // await page.waitForTimeout(3000)


    await page.selectOption('.ui-selectonemenu', {value: 'Playwright'})
    // page.getByRole('option', { name: 'Playwright' })

    await page.waitForTimeout(8000)
})

test(`Select a dropdown value by visible text`, async({page})=> {
await page.goto(`https://practice.expandtesting.com/dropdown`)
// await page.getByLabel(`Close shopping anchor`).click()
await page.selectOption('#country', {label: 'India'} )
await page.waitForTimeout(3000)
})

test(`Select a dropdown value by value`, async({page})=> {
await page.goto(`https://practice.expandtesting.com/dropdown`)
await page.selectOption('#country', {value: 'IN'} )
await page.waitForTimeout(3000)
})

test(`Handle an auto-suggestion dropdown`, async({page})=> {
await page.goto(`https://www.htmlelements.com/demos/dropdownlist/auto-complete/`)
const frameloc =  page.frameLocator('iframe.demo-frame')
await frameloc.getByRole('button', {name: 'Affogato'}).click()
await page.keyboard.press('I')
await page.waitForTimeout(5000)
})


// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://www.htmlelements.com/demos/dropdownlist/auto-complete/');
//   await page.locator('iframe').contentFrame().getByRole('button', { name: 'Affogato' }).click();
//   await page.locator('iframe').contentFrame().getByRole('button', { name: 'Affogato' }).press('Tab');
// });


test.only('verify the Abhibus ticket booking', async({page}) => {

await page.goto('https://www.abhibus.com/')
await page.getByPlaceholder('Leaving From').fill('Hyder')
await page.locator(`//div[text()='Gachibowli']`).click()
await page.waitForTimeout(5000)
} )
