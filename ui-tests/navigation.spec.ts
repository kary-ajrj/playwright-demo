import {test} from "@playwright/test";
import {NavigationPage} from "../pages/navigationPage";

test.describe("Verify navigation", () => {
    test("Check pagination", async ({page}) => {
        const pagination = new NavigationPage(page)
        await pagination.verifyPagination()
    })

    test("Visual regression",async({page}) =>{
        const pagination = new NavigationPage(page)
        await pagination.verifyScreenShot(page)
    })
})
