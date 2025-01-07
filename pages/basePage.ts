import {Locator, Page} from "@playwright/test";
import playwrightConfig from "../playwright.config";

export class BasePage {
    readonly page: Page
    readonly WebFormButton: Locator
    readonly NavigationButton: Locator
    constructor(page: Page) {
        this.page = page
        this.WebFormButton = page.getByRole('link', { name: 'Web form' })
        this.NavigationButton = page.getByRole('link', { name: 'Navigation' })
    }
    async goToBaseURL(){
        const baseURL = playwrightConfig.projects[0].use.baseURL
        await this.page.goto(baseURL)
    }
    async clickWebFormButton() {
        await this.goToBaseURL()
        await this.WebFormButton.click()
    }
    async clickNavigationButton() {
        await this.goToBaseURL()
        await this.NavigationButton.click()
    }
}
