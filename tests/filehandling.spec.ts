import {test} from '@playwright/test'
import path from 'path'

test.only(`Verify the file download function`, async({page})=> {

    await page.goto(`https://leafground.com/file.xhtml`)
    // await page.pause()

    /* Below line of 3 codes***/
    // const filepromise = page.waitForEvent('download')
    // await page.getByRole(`button`, {name: /Download/}).click();
    // const fdown = await filepromise

    /* Below one line code instead of above 3 codes***/
    const [filepromise] = await Promise.all([page.waitForEvent('download'), page.getByRole(`button`, {name: /Download/}).click()])

    const filepath = path.join(__dirname,`../Data/testleaflogo.png`);
    console.log(`File path is --> ${filepath}`)

    await filepromise.saveAs(filepath)

    await page.waitForTimeout(3000)

})


test(`Verify the file upload - type = 'file`, async({page})=> {
    await page.goto(`https://leafground.com/file.xhtml`)
    await page.locator(`(//input[@type='file'])[1]`).setInputFiles(path.join(__dirname,`../Data/sample.txt`))
    await page.waitForTimeout(3000)

    const filepromise = page.waitForEvent('filechooser')
    const element = await page.locator(`//span[contains(@class,'fileupload-choose')]`).click()
    const fileupload = await filepromise

    await fileupload.setFiles(path.join(__dirname,`../Data/testleaflogo.png`))

    const uploadbtn = `//button[contains(@class, 'fileupload-upload')]`
    await page.waitForSelector(uploadbtn, {state: 'visible'})

    await page.locator(uploadbtn).click()
    await page.waitForTimeout(3000)

})