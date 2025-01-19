import playwright from 'eslint-plugin-playwright'
export default [
    {
        ...playwright.configs['flat/recommended'],
        files: ['ui-tests/**.{js,ts}','api-tests/**.{js,ts}'],
        rules: {
            ...playwright.configs['flat/recommended'].rules,
            "playwright/no-commented-out-tests":["warn"],
            "playwright/no-duplicate-hooks":["warn"]
        },
    },
]
