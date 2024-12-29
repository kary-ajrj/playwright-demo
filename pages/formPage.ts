import {expect, Locator, Page} from "@playwright/test";

export class FormPage {
    readonly page: Page
    readonly FName: Locator
    readonly Submit: Locator
    readonly TextVerify: Locator
    constructor(page: Page) {
        this.page = page
        this.FName = page.getByLabel('Text input')
        this.Submit = page.getByRole('button', {name: 'Submit'})
        this.TextVerify = page.getByText("Form submitted")
    }
    async fillForm() {
        await this.FName.fill("Someone")
        await this.Submit.click()
    }

    async verifySuccessfulFormFilling(){
        await expect(this.TextVerify).toBeVisible()
    }
}
