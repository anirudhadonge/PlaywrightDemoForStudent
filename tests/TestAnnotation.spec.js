import{test,expect} from'@playwright/test'
import { beforeEach } from 'node:test';


// test.describe("This is a demo group",()=>{
//     test.beforeEach('this is a before each block',()=>{
//         console.log("this is a before each block");
//     })
//     test("this is my test1 ",()=>{
//         console.log("Test 1");
//     })
//     test("this is my test2 ",()=>{
//         console.log("Test 2");
//     })
//     test("this is my test3 ",()=>{
//         console.log("Test 3");
//     })
// })

test.describe("Test are for Playwringht actions",async ()=>{

    test.beforeAll("this is a before all method",async ()=>{
        console.log("This is a before all method");
    })
    test.beforeEach("This is a before each method",async ({page})=>{
        await page.goto("https://the-internet.herokuapp.com/");
        //await page.goto("https://the-internet.herokuapp.com/");
    })

    test.afterEach("This is a before each method",async ({page})=>{
        await page.waitForTimeout(3000);
        await page.close();
    })

    test.afterAll("this is a After all method",async ()=>{
        console.log("This is a After all method");
    })

    test("This test demos the Playwright click Actions",async ({page})=>{
    await page.click('[href="/checkboxes"]',{
        delay:2000,
        timeout:5000
    })
    await expect(page.locator('h3')).toHaveText("Checkboxes");
    })
    
    
    test("This test demos the Playwright Fill and PressSequentially Actions",async ({page})=>{
        await page.goto("https://the-internet.herokuapp.com/login");
        await page.locator("#username").pressSequentially("tomsmith",{
            delay:2000
        });
        await page.locator("#password").fill("SuperSecretPassword!");
        await page.locator('[type="submit"]').click();
        await expect(page.locator(".subheader")).toHaveText("Welcome to the Secure Area. When you are done click logout below.");
        })
    
    test("This test demos the Playwright Select Actions",async ({page})=>{
            await page.goto("https://the-internet.herokuapp.com/dropdown");
            await page.locator("select#dropdown").selectOption("Option 2");
    });
    
    
    test("This test demos the Playwright checkboxes",async ({page})=>{
         await page.goto("https://the-internet.herokuapp.com/checkboxes");
        // // await page.locator("[type='checkbox']").nth(0).check();
        // await page.check("[type='checkbox']");
        // let flag = await page.locator("[type='checkbox']").nth(0).isChecked();
        // console.log("The element is checked :"+flag);
        // await expect(page.locator("[type='checkbox']").nth(0)).toBeChecked();
        // // await page.locator("[type='checkbox']").nth(0).uncheck();
        // await page.uncheck("[type='checkbox']");
        // flag = await page.locator("[type='checkbox']").nth(0).isChecked();
        // console.log("The element is checked :"+flag);
        await page.click("[type='checkbox']");
        if(page.locator("[type='checkbox']").nth(0).isChecked()){
            await page.click("[type='checkbox']");
        }
    
    });
    
    test("This test demos the Playwright Iframes",async ({page})=>{
        await page.goto("https://the-internet.herokuapp.com/iframe");
        await page.locator("button.tox-notification__dismiss.tox-button.tox-button--naked.tox-button--icon").click();
        let frameLocator = page.frameLocator("//iframe");
        await expect(frameLocator.locator("//p[text()='Your content goes here.']")).toBeVisible();
        await expect(page.locator("//h3")).toHaveText("An iFrame containing the TinyMCE WYSIWYG Editor");
    });
    
    
    test("This test demos the Playwright Upload Action",async ({page})=>{
        let uploadBtn = "#file-upload";
        let fileSubmit = "#file-submit";
        //let fileLocator = 'C:\\UploadFiles\\1000_F_561609331_cmOdHBvlRGhWqPZuB1QBLLlc6nQ1m1eq.jpg';
        console.log('current directory '+__dirname);
        let fileLocator = ".\\file\\1000_F_561609331_cmOdHBvlRGhWqPZuB1QBLLlc6nQ1m1eq.jpg"
        await page.goto("https://the-internet.herokuapp.com/upload");
        await page.locator(uploadBtn).setInputFiles(fileLocator);
        await page.locator(fileSubmit).click();
        await expect(page.locator("#uploaded-files")).toHaveText("1000_F_561609331_cmOdHBvlRGhWqPZuB1QBLLlc6nQ1m1eq.jpg");
    });
    
    
    test("This test demos the Playwright download Action",async ({page})=>{
        await page.goto("https://the-internet.herokuapp.com/download");
        let downloadFile = "[href='download/Uploadfile.txt']";
    
        const downloadevent = page.waitForEvent('download');
        await page.locator(downloadFile).click();
        const download = await downloadevent;
    
        await download.saveAs("C:\\UploadFiles\\"+download.suggestedFilename());
    
    });
    
    // test("This test demos the Playwright waits",async ({page})=>{
    //     // auto wait in place.
    //     await page.goto("https://the-internet.herokuapp.com/");
    //     await page.waitForTimeout(3000);
    //     let uploadedLable = "locator:has-text('The table is updated with the value')";
    //     await page.waitForSelector(uploadedLable,{
    //         state:"visible"
    //     })
        
    //     await page.waitForLoadState({
    //         state:"networkidle"
    //     })
    //     await page.locator("[href='/login']").click();
    // });
    
    })