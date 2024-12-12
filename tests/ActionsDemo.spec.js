import {test,expect} from "@playwright/test"
import exp from "constants";

test.describe("Test are for Playwringht actions",{
    tag:"@Smoke"
},()=>{


test("@Demo This test demos the Playwright click Actions",{
    tag:"@Click"
},async ({page})=>{
await page.goto("/");
await page.click('[href="/checkboxes"]',{
    delay:2000,
    timeout:5000
})
await expect(page.locator('h3')).toHaveText("Checkboxes");
})


test.only("@Demo This test demos the Playwright Fill and PressSequentially Actions",async ({page})=>{
    await page.goto("/login");
    await page.locator("#username").pressSequentially("tomsmith",{
        //delay:2000
    });
    await page.locator("#password").fill("SuperSecretPassword!");
    await page.locator('[type="submit"]').click();
    await expect(page.locator(".subheader")).toHaveText("Welcome to the Secure Area. When you are done click logout below.");
    })

test("@Demo This test demos the Playwright Select Actions",async ({page})=>{
        await page.goto("/dropdown");
        await page.locator("select#dropdown").selectOption("Option 2");
});


test("This test demos the Playwright checkboxes",async ({page})=>{
     await page.goto("/checkboxes");
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
    await page.goto("/iframe");
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
    await page.goto("/upload");
    await page.locator(uploadBtn).setInputFiles(fileLocator);
    await page.locator(fileSubmit).click();
    await expect(page.locator("#uploaded-files")).toHaveText("1000_F_561609331_cmOdHBvlRGhWqPZuB1QBLLlc6nQ1m1eq.jpg");
});


test("This test demos the Playwright download Action",async ({page})=>{
    await page.goto("/download");
    let downloadFile = "[href='download/Uploadfile.txt']";

    const downloadevent = page.waitForEvent('download');
    await page.locator(downloadFile).click();
    const download = await downloadevent;

    await download.saveAs("C:\\UploadFiles\\"+download.suggestedFilename());

});

test("This test demos the Playwright waits",async ({page})=>{
    // auto wait in place.
    await page.goto("/");
    await page.waitForTimeout(3000);
    let uploadedLable = "locator:has-text('The table is updated with the value')";
    await page.waitForSelector(uploadedLable,{
        state:"visible"
    })
    
    await page.waitForLoadState({
        state:"networkidle"
    })
    await page.locator("[href='/login']").click();
});

test("@Smoke, @dialog This test demos the Playwright Dialog",async ({page})=>{
    // auto wait in place.
    let alert = "[onclick='jsAlert()']";
    let jsConfirm = "[onclick='jsConfirm()']";
    let prompt = "[onclick='jsPrompt()']"
    await page.goto("/javascript_alerts");
    page.on('dialog', (dialog) =>{ 
        console.log(dialog.message());
        dialog.accept("This is a Javascript dialog session")
    });
    await page.locator(prompt).click();
    await expect(page.locator("#result")).toHaveText("You entered: This is a Javascript dialog session");
});


})


test("@Demo,@Smoke, @Hover This is an example for Hover action",async ({page})=>{
    let hoverText ="name: user1";
    let viewProfile = "[href='/users/1']";
    await page.goto("/hovers");
    await page.locator("div.figure").nth(0).hover();
    await expect(page.locator("h5:has-text('"+hoverText+"')")).toBeVisible();
})

test("@Demo,@Newpage This is an example for Handeling New Page",async ({context, page})=>{
    await page.goto("/windows");
    const pagePromise = context.waitForEvent('page');
    await page.locator("[href='/windows/new']").click();
    let newPage = await pagePromise;
    //await expect(newPage.locator('h3')).toHaveText("New Window");
    await expect(await newPage.url()=="/windows/new").toBeTruthy();
   // newPage.close();
    await expect(page.locator("h3")).toHaveText("Opening a new window");
})