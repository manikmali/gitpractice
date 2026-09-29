import {test, expect} from '@playwright/test'

test('Verify the hover functionality', {tag: '@sanity'}, async({page}) => {
    await page.goto(`https://the-internet.herokuapp.com/hovers`)
    const image_count = await page.getByRole(`img`, {name: 'User Avatar'}).count()
    console.log(`The total no. of image is ->  ${image_count}`)
    for (let i=0; i<image_count; i++) {    
    await page.getByRole(`img`, {name: 'User Avatar'}).nth(i).hover()
    const output = await page.locator(`(//img[@src='/img/avatar-blank.jpg']/following::div/h5)[${i+1}]`).innerText()
    console.log(output)
    }
    await page.waitForTimeout(5000)
})

