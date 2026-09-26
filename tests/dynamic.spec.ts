import {test, expect, Locator} from '@playwright/test'

// let result1: boolean, result2 : boolean 
// function check_box_visibility(item: any) {
//     if (item.isVisible()) {
//      console.log(`Check box is Visible`);
//     }
//     else {
//     console.log(`Check box is not visible`);
//     }
// }


// function text_box_visibility(item: any) {
//     if (item.isEnabled()) {
//      console.log(`Text box is enabled`);
//     }
//     else {
//     console.log(`Text box is not enabled`);
//     }
// }

test('Verify dynamic controls', async({page}) => {

await page.goto(`https://the-internet.herokuapp.com/dynamic_controls`)

// const check_box = await page.locator('#checkbox>input').isVisible()
// const text_box = await page.locator('#input-example>input').isEnabled()

const check_box = page.locator('#checkbox>input')
const text_box =  page.locator('#input-example>input')

const add_remove_btn = page.locator(`#checkbox-example>button`)
const checkbox_loading = '#checkbox-example>#loading'

const enable_disable_btn = page.locator(`#input-example>button`)


// const enable_disable_btn = page.getByRole("textbox")
// check_box_visibility(check_box)
// text_box_visibility(text_box)

await check_box.isVisible() ?  console.log('Check box is Visible') :  console.log('Check box is not Visible');

await text_box.isEnabled() ?  console.log('Text box is Editable') : console.log('Text box is Non-Editable');

await add_remove_btn.click()

await enable_disable_btn.click()

// Wait until the loader disappears
await page.waitForSelector('#loading', { state: 'hidden' });

// await page.waitForTimeout(10000)

async function check_box_visibility(checkbox: any) {
 await checkbox.isVisible() ? console.log('Check box is Visible') : console.log('Check box is not Visible')
}

async function text_box_visibility(checkbox: any) {
 await text_box.isVisible() ? console.log('Text box is Editable') : console.log('Text box is Non-Editable')
}


// if (await check_box.isVisible()) {
//     console.log('Check box is Visible');    
// } else { console.log('Check box is not Visible');}


check_box_visibility(check_box)

text_box_visibility(text_box)

// if (await text_box.isEnabled()) {
//     console.log('Text box is Editable');    
// } else { console.log('Text box is Non-Editable');}
// 
// function check_box_visibility(item: any) {
//     if (item.isVisible()) {
//      console.log(`Check box is Visible`);
//     }
//     else {
//     console.log(`Check box is not visible`);
//     }
// }


// function text_box_visibility(item: any) {
//     if (item.isEnabled()) {
//      console.log(`Text box is enabled`);
//     }
//     else {
//     console.log(`Text box is not enabled`);
//     }
// }

})