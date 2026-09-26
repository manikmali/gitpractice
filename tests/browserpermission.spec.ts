import {test, expect} from '@playwright/test'

test.use({permissions: ['geolocation', 'notifications', 'camera', 'microphone', ]})

test('Verify the GeoLocation scenario', async({page})=> {
await page.goto(`https://the-internet.herokuapp.com/geolocation`)
await page.getByRole(`button`, {name: 'Where am I?'}).click()
await page.waitForTimeout(5000)

})