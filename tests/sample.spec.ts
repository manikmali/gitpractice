import {test, expect} from '@playwright/test'


test('Geo Location', async({ page })=> {

   await page.goto('https://the-internet.herokuapp.com')
   // await page.goto('https://the-internet.herokuapp.com/geolocation')
   await page.getByRole('link', {name: 'Geolocation'}).click()
   await page.getByRole('button', {name: 'Where am I?'}).click()
   await page.waitForTimeout(3000)
   await page.goBack()
   await page.getByRole('link', {name: 'Drag and Drop'}).click()
   const element = page.getByText('A', {exact: true})
   const coord = await element.boundingBox()
   if (coord) {
      const a = coord.x
      const b = coord.y
      console.log(`X - ${a},  Y - ${b}`);
      await page.mouse.move(a,b)
      await page.mouse.down()
   }
   
   const element2 = page.getByText('B', {exact: true})
   const coord_B = await element2.boundingBox()
   if (coord_B) {
      const x = coord_B.x
      const y = coord_B.y
      console.log(`X - ${x},  Y - ${y}`);
      await page.mouse.move(x,y)
      await page.mouse.up()
   }
   await page.waitForTimeout(3000)

   



   await page.goBack()

}



)