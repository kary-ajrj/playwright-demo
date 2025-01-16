import { test } from '@playwright/test';
import { FormPage } from '../pages/formPage';

/* To use baseURL from config directly in tests, use the below snippet.
   No need to exchange basePage class in that case.*/

/* import {BasePage} from "../pages/basePage";
test.beforeEach(async ({page},testInfo) => {
    const base = new BasePage(page)
    await page.goto(testInfo.project.use.baseURL)
    await base.clickWebFormButton()
})*/
test.describe('Verify the form', () => {
  test('Fill the form', async ({ page }) => {
    const form = new FormPage(page);
    await form.fillForm();
    await form.verifySuccessfulFormFilling();
  });
});
