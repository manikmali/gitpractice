import {test} from '@playwright/test'
import { loginPage } from '../pages/loginpage'

test(`Verify the login functionality using separate class file`, async({page}) => {
    const logn = new loginPage(page)

    await logn.loadurl()
    await logn.login_credentials('Demosalesmanager','crmsfa')
    await logn.login_click()
    await logn.close_browser()    

})