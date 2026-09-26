import { test } from '@playwright/test'

test(`Verify simple API flow`, async ({ request }) => {

    const response = await request.get('https://petstore.swagger.io/v2/pet/findByStatus?status=pending',
        {
            headers: { "content-type": 'application/json' }
        }
    )

    const response_body = await response.json()
    console.log(response_body)

    const pets = response_body
    pets.forEach((pet: any) => console.log(pet.category))


})