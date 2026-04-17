import {expect, test} from "@playwright/test";

test("Register_Page", async ({page}) =>
    {
         await page.goto("https://automationexercise.com/");
         console.log("Page loaded successfully");
    }
);