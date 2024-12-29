import {test} from "@playwright/test";
import {FormPage} from "../pages/formPage";

test.beforeEach(async ({page}) => {
    await page.goto("web-form.html")
})
test.describe("Verify the form", () => {
    test("Fill the form", async ({page}) => {
        const form = new FormPage(page)
        await form.fillForm()
        await form.verifySuccessfulFormFilling()
    })
})
