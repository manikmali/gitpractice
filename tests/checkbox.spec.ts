import {test, expect} from '@playwright/test'

test(`Verify multiple check box option`, {tag: '@sanity'}, async({page})=> {

await page.goto(`https://leafground.com/checkbox.xhtml`)

// await page.getByRole('list').filter({hasText:/^$/}).click()
await page.locator(`//ul[@data-label="Cities"]`).click()
await page.locator("(//li[@data-item-value='Miami']/div)[1]").click()
await page.locator("(//li[@data-item-value='London']/div)[1]").click()

await page.waitForTimeout(5000)

})

test(`Verify multiple check boxes`, {tag: '@sanity'}, async({page})=> {
await page.goto(`https://www.qa-practice.com/elements/checkbox/mult_checkbox`)
await page.check(`//input[@value="one"]`)
await page.check(`//input[@value="two"]`)

// Or below method to check all
const checkboxes = await page.getByRole('checkbox').all()

for (const checkbox of checkboxes) {
    if(! await checkbox.isChecked()) {
        await checkbox.check()
    }
}
// To uncheck a check box
await page.uncheck(`//input[@value="one"]`)
expect (page.locator(`//input[@value="one"]`)).not.toBeChecked()
await page.waitForTimeout(3000)
})