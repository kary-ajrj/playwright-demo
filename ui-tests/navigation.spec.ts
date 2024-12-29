import {test} from "@playwright/test";
import {NavigationPage} from "../pages/navigationPage";

test.beforeEach(async ({page}) => {
    await page.goto("navigation1.html")
})

test.describe("Verify navigation", () => {
    test("Check pagination", async ({page}) => {
        const pagination = new NavigationPage(page)
        await pagination.verifyPagination()
    })
})
