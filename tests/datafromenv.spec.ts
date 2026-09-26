import {test} from '@playwright/test'
import dotenv from 'dotenv'
import path from "path"

// console.log(process.env)

var ps : any = process.env
var env_path : any = path.join(__dirname, '../Data/qa.env')

dotenv.config({path: `${env_path}`})

test(`Verify retrieving data from env file`, async({page}) => {

    await page.goto(ps.url)
    await page.getByRole('textbox', { name: 'Username' }).fill(ps.uname)
    await page.getByRole('textbox', { name: 'Password' }).fill(ps.password)
    await page.getByRole('button', { name: 'Login' }).click()
    await page.waitForLoadState("load")
    await page.getByRole('button', { name: 'Logout' }).click()
})