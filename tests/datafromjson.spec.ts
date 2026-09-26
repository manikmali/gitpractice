import {test} from '@playwright/test'

import credentials from '../Data/login.json'

for (let data of credentials) {

test(`Login to Leaf Tap applications -> ${data.testcaseid}`, async({page}) => {

await page.goto('https://leaftaps.com/opentaps/control/main')
await page.getByRole('textbox', {name: 'Username'}).fill(data.username)
await page.getByRole('textbox', {name: 'Password'}).fill(data.password)
await page.getByRole('button', {name: 'Login'}).click()
await page.waitForLoadState("load")
await page.getByRole('button', {name: 'Logout'}).click()


})

}