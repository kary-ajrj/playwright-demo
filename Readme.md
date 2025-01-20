## Description

- This repository shows the complete architecture of an automation framework.
- Independent API and UI tests can be run in this.
- UI tests are loosely structured as PoM - pages are based on functionality shown on a given web page.
  - Only the required pages are instantiated using fixtures.

## Best practices

- Prettier and eslint-plugin-playwright are for coding standards.
- lint-staged plugin makes prettier and eslint-plugin-playwright run only for staged files.
- Talisman is to prevent any secrets to land in the repository.
- Husky is used for pre-commit hook that runs talisman and lint-staged.

## Reporting

- Allure reporting is used.
- It will also show "trends" of test runs.
- Reports are hosted on Github Pages => https://kary-ajrj.github.io/playwright-demo/
- ![Screenshot 2025-01-20 at 21.05.40.png](Screenshot%202025-01-20%20at%2021.05.40.png)

## Pipeline

- It has Github Actions configured to demonstrate pipeline test runs.

## Usage:

- Clone the repository and run `yarn playwright test` to execute tests.
- Install talisman using `bash -c "$(curl --silent https://raw.githubusercontent.com/thoughtworks/talisman/main/install.sh)"`
- `yarn lint-staged` can be run to independently trigger prettier and linting.
- `yarn eslint` can be run to independently trigger linting and see warnings.
- `yarn prettify` can be run to independently trigger prettier fixes.
- `yarn playwright test --ui` runs tests through the UI.

## Visual regression testing:

- Reverted this because it does not seem to be plug-play like rest of the features in playwright:
- https://github.com/kary-ajrj/playwright-demo/commit/e0289e8976e6faed4b91b9ea21ba92d99c9d2c3e
- If you have any suggestions - raise a PR!

PS: Commits show the growth of the framework in self-explanatory steps.
