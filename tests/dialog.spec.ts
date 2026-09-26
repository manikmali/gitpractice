import {test, expect} from "@playwright/test"

test(`Verifying all the dialog boxes in a page`, async({page}) => {

    await page.goto('https://leafground.com/alert.xhtml')

    page.on("dialog", async(alert) => {

        if (alert.type()=='alert') {
            console.log(`Message in the dialog box is ${alert.message()}`)
            expect (alert.message()).toContain('I am simple alert.')
            alert.accept()
        }
        else if (alert.type()=='confirm') {
            console.log(`Message in the dialog box is ${alert.message()}`)
            expect (alert.message()).toContain('Did you call me?')
            alert.accept()
        }
        else {
            console.log(`Message in the dialog box is ${alert.message()}`)
            expect (alert.message()).toContain('Type your name and click OK')
            alert.accept('Mani')
        }
    })

    await page.locator("(//span[text()='Show'])[1]").click()
    const output_text1 = await page.locator('#simple_result').innerText()
    console.log(`Simple Dialog output is: ${output_text1}`)

    // await page.locator("(//span[text()='Show'])[2]").click()
    await page.locator(".card").filter({hasText: ' Alert (Confirm Dialog)'}).locator(`button`).click()
    const output_text2 = await page.locator('#result').innerText()
    console.log(`Simple Dialog output is: ${output_text2}`)


    await page.locator("(//span[text()='Show'])[5]").click()
    const output_text3 = await page.locator('#confirm_result').innerText()
    console.log(`Simple Dialog output is: ${output_text3}`)

    await page.waitForTimeout(5000)

})
