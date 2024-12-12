import {test,expect} from "@playwright/test"



test("This test demos the Playwright alert dialog Actions",async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    let alertBtn = "[onclick='jsAlert()']";
    let confirmBtn = "[onclick='jsConfirm()']";
    let jsPromptBtn = "[onclick='jsPrompt()']";
    page.on('dialog',(dialog)=>{
        console.log(dialog.message());
        dialog.accept("This is a demo");
    });
    await page.locator(jsPromptBtn).click();
    })

