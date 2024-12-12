// import {test,expect, chromium,firefox, webkit} from "@playwright/test"


// // Perform some action --- Page Fixture
// // Validate your Action --- expect 
// // :has-text --- We provide a partial text for finding the locator
// // :text-is --- we would provide a extact test to find the element or locator

// // xpath --- //*[@class='theme-doc-markdown markdown']//h1[contains(text(),'Installation')]
// // css locator --- if we are not able to find element using css locator we need to use xpath

// /// expect is used to validate the actions. 
// /*
// toHaveText()
// toBeVisible()
// toBeHidden()
// toBeFalsy()
// toBeTruthy()
// */

// test('This is my first test',async ()=>{
//     const browser =  await chromium.launch({
//         args:["--start-maximized"]
//     });
//     // const context = await browser.newContext({
//     //     recordVideo:{OneNotet
//     //         dir:"./videos/",
//     //     }
//     });
//     const page = await context.newPage()
//     await page.goto("https://playwright.dev/");
//     await page.locator(".getStarted_Sjon").click();
//     let installationHeader = page.locator(".theme-doc-markdown.markdown h1:text-is('Installation')");
//     //let installationHeader = page.locator("//*[contains(text(),'Install')]").nth(3); //page.locator("//*[@class='theme-doc-markdown markdown']//h1[text()='Installation']");
//     // if(installationHeader.isVisible){
//     //     expect(await installationHeader.isChecked()).toBeFalsy()
//     // }else{

//     // }

//     await expect(installationHeader).toBeVisible();
//     expect(await installationHeader.isVisible()).toBeTruthy();
//     //await expect(installationHeader).
//     await page.locator(".navbar__title,text--truncate").click();
//     await expect(page.locator(".getStarted_Sjon")).toBeVisible();
// });
