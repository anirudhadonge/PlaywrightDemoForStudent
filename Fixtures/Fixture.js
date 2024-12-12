import {test as baseTest,expect,page} from "@playwright/test"


const test = baseTest.extend({

    basePage : async({page},use)=>{
        await page.goto("")
    }
})