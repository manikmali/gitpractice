import {chromium, Page} from '@playwright/test'



export class loginPage {

    private lpage : Page 

    constructor(Lpage: Page) {
        this.lpage = Lpage
    }


    async loadurl() {
        await this.lpage.goto('https://leaftaps.com/opentaps/control/main')
    }

    async login_credentials(uname: string, pwd: string){
        await this.lpage.locator(`input#username`).fill(uname)
        await this.lpage.locator(`input#password`).fill(pwd)
    }

    async login_click() {
        await this.lpage.locator(`input.decorativeSubmit`).click()
        this.lpage.on('request', req => console.log('>>', req.method(), req.url()));
        this.lpage.on('response', res => console.log('<<', res.status(), res.url()));

    }

    async close_browser() {
        await this.lpage.close()
    }

    public get page() {
        return this.lpage
    }

}

// const browser = await chromium.launch({headless: false})
// const context = await browser.newContext()
// const pg = await context.newPage()

// const lp = new login(pg)
