import {test, expect} from '@playwright/test'

test(`Verify the frames head title`, async({page}) => {
await page.goto(`https://leafground.com/frame.xhtml`)
// const allframe = page.frameLocator(`//iframe[@src]/preceding-sibling::h5`)
const allframe = page.locator(`//iframe[@src]/preceding-sibling::h5`)
const framecount = await allframe.count()
console.log(`The total no. of frames are ${framecount}`)
for (let i=0; i < framecount; i++) {
const frameheader= await allframe.nth(i).innerText()
console.log(frameheader)
}
})


test(`verify the locator inside frame`, async({page}) => {
await page.goto(`https://leafground.com/frame.xhtml`)
const allframe = page.frameLocator(`iframe[src="default.xhtml"]`)
await allframe.getByRole(`button`, {name: 'Click Me'}).click()
await page.waitForTimeout(2000)
const text = await allframe.locator(`button[id='Click']`).innerText()
console.log(text)
})

test.only(`verify the locator nested frame`, async({page}) => {
await page.goto(`https://leafground.com/frame.xhtml`)
const allframe = page.frameLocator(`iframe[src="page.xhtml"]`)
const innerframe = allframe.frameLocator(`iframe[src="framebutton.xhtml"]`)
await innerframe.getByRole(`button`, {name: 'Click Me'}).click()
await page.waitForTimeout(2000)
const text = await innerframe.locator(`button[id='Click']`).innerText()
console.log(text)
})