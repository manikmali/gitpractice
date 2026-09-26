import {test} from '@playwright/test'

test('Verify the menu items in bookmy', async({page}) =>{

await page.goto('https://www.makemytrip.com/flights/', {waitUntil: "domcontentloaded"})

const locators = page.locator(`span.navFullTitle`)
const loc_count = await locators.count()
console.log(loc_count)

for (let i=0; i<loc_count; i++) {
console.log(await locators.nth(i).innerText())
}

})