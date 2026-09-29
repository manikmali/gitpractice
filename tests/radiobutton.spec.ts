import {test, expect} from '@playwright/test'

test(`Verify the radio button`, async({page}) => {
await page.goto(`https://leafground.com/radio.xhtml`)

const Firefox = page.locator(`//table[@id='j_idt87:console1']//label[text()='Firefox']`)
await Firefox.click()

expect.soft(await Firefox.isChecked()).toBeTruthy()
await page.waitForTimeout(3000)
})


test(`Verify the default select radio button`, {tag: '@sanity'}, async({page}) => {
await page.goto(`https://leafground.com/radio.xhtml`)

const dft_btns = page.locator(`//table[@id='j_idt87:console2']//label`)
const dft_btns_count = await dft_btns.count()

for (let i=0; i<dft_btns_count; i++) {
    if (! await dft_btns.nth(i).isChecked()) {
        await dft_btns.nth(i).click()
    }
    console.log(await dft_btns.nth(i).innerText())
}
await page.waitForTimeout(3000)
})