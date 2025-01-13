import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [["line"], ["allure-playwright", {resultsDir: "allure-results/history",}]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  projects: [
    {
      testDir: './ui-tests',
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], baseURL: 'https://bonigarcia.dev/selenium-webdriver-java/'},
    },
    {
      testDir: './ui-tests',
      name: 'firefox',
      use: { ...devices['Desktop Firefox'], baseURL: 'https://bonigarcia.dev/selenium-webdriver-java/'},
    },
    {
      testDir: './api-tests',
      name: 'api-tests',
      use: { baseURL: 'https://reqres.in/'},
    },
  ],
});
