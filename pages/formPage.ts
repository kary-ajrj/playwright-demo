import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class FormPage extends BasePage {
  readonly page: Page;
  readonly FName: Locator;
  readonly Submit: Locator;
  readonly TextVerify: Locator;
  constructor(page: Page) {
    super(page);
    this.page = page;
    this.FName = page.getByLabel('Text input');
    this.Submit = page.getByRole('button', { name: 'Submit' });
    this.TextVerify = page.getByText('Form submitted');
  }
  async fillForm() {
    await this.clickWebFormButton();
    await this.FName.fill('Someone');
    await this.Submit.click();
  }

  async verifySuccessfulFormFilling() {
    await expect(this.TextVerify).toBeVisible();
  }
}
