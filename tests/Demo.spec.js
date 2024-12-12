import {test,expect, chromium, webkit} from '@playwright/test'
import { launchBrower , getContext } from '../Browser/LaunchBrowser';

test("This is a demo Test",async ()=>{
    const browser = await launchBrower("Chromium");
    const context = await getContext(browser);
    const page = await context.newPage()
    await page.goto("https://playwright.dev/dotnet/");
    await page.locator(".getStarted_Sjon").click();
    await expect(page.locator(".theme-doc-markdown.markdown h1")).toHaveText("Installation");
    await page.locator("ul.menu__list li a[href='/dotnet/docs/writing-tests']").click();
    await expect(page.locator(".theme-doc-markdown.markdown h1")).toHaveText("Writing tests");
})
