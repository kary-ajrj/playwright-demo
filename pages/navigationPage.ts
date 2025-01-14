import {expect, Locator, Page} from "@playwright/test";
import {BasePage} from "./basePage";

export class NavigationPage extends BasePage{
    readonly page: Page
    readonly PageOneText: Locator
    readonly Next: Locator
    readonly Page2Text: Locator
    constructor(page: Page) {
        super(page);
        this.page = page
        this.PageOneText = page.getByText('Lorem ipsum dolor sit amet,')
        this.Next = page.getByRole('link', { name: 'Next' })
        this.Page2Text = page.getByText('Ut enim ad minim veniam, quis')
    }
    async verifyPagination() {
        await this.clickNavigationButton()
        await this.PageOneText.isVisible()
        await this.Next.click()
        await expect(this.Page2Text).toBeVisible()
    }
    async verifyScreenShot(page){
        await this.clickNavigationButton()
        await this.PageOneText.isVisible()
        await expect(page).toHaveScreenshot();

    }
}
