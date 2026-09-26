import {test, expect} from '@playwright/test'

test(`Verify the mouse event functionality`, async({page}) => {
    await page.goto(`https://vinothqaacademy.com/mouse-event/`)

    //Double-click an element
    await page.locator(`button#doubleBtn`).dblclick()
    const dblclick_msg = await page.locator(`span#doubleStatus`).innerText()
    console.log(`Double click Message output is -> ${dblclick_msg}`)

    //Right-click an element.
    await page.locator(`button#rightBtn`).click({button: 'right'})
    await page.locator(`div.context-menu>button`).filter({hasText: 'Copy'}).click()
    const rightclick_msg = await page.locator(`span#rightStatus`).innerText()
    console.log(`Right Click Message output is -> ${rightclick_msg}`)

    //Drag and drop an element.
    await page.locator(`div#dragItem`).hover()
    await page.mouse.down()
    await page.locator(`div#dropZone`).hover()
    await page.mouse.up()
    const drag_msg = await page.locator(`span#dragStatus`).innerText()
    console.log(`Right Click Message output is -> ${drag_msg}`)

    await page.waitForTimeout(5000)
})