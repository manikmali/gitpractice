import { test } from '@playwright/test'
import path from 'path'
import { parse } from 'csv-parse/sync'
import fs from 'fs'

let credentials: any[] = parse(fs.readFileSync(path.join(__dirname, `../Data/login.csv`)), { columns: true, skip_empty_lines: true })

test.beforeAll(`Execute very first`, async () => {
    console.log(`Functionality to test fetching the data from csv file`)
})

test.afterAll(`Completed the all test `, async () => {
    console.log(`---------Completed the all test--------------`)
})

test.beforeEach(`Executing this individual test `, async () => {
    console.log(`Running ${test.info().title}`);
})

test.afterEach(`Completing this individual test`, async ({page}) => {
    // await page.screenshot()
    console.log(`Finished ${test.info().title} with status ${test.info().status}`);
})

for (let data of credentials) {

    test(`verify the login using csv file --> ${data.tcaseid}`, async ({ page }) => {
        await page.goto('https://leaftaps.com/opentaps/control/main')
        await page.getByRole('textbox', { name: 'Username' }).fill(data.username)
        await page.getByRole('textbox', { name: 'Password' }).fill(data.password)
        await page.getByRole('button', { name: 'Login' }).click()
        await page.waitForLoadState("load")
        await page.getByRole('button', { name: 'Logout' }).click()
    })
}