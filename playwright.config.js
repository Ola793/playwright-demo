"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.STORAGE_STATE = void 0;
// @ts-nocheck
const test_1 = require("@playwright/test");
const path_1 = __importDefault(require("path"));
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
require("dotenv").config();
/**
 * @see https://playwright.dev/docs/test-configuration
 */
exports.STORAGE_STATE = path_1.default.join(__dirname, "states/.auth/user.json");
exports.default = (0, test_1.defineConfig)({
    globalSetup: "./global-setup",
    testDir: "./tests",
    /* Run tests in files in parallel */
    fullyParallel: true,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    // forbidOnly: !!process.env.CI,
    /* Retry on CI only */
    retries: process.env.CI ? 2 : 0,
    /* Opt out of parallel tests on CI. */
    workers: process.env.CI ? 1 : undefined,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: "html",
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        /* Base URL to use in actions like `await page.goto('/')`. */
        baseURL: "https://qauto.forstudy.space/",
        storageState: exports.STORAGE_STATE,
        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: "on-first-retry",
        httpCredentials: {
            username: process.env.HTTP_NAME,
            password: process.env.HTTP_PASSWORD,
        },
        screenshot: "only-on-failure",
    },
    /* Configure projects for major browsers */
    projects: [
        // {
        //   name: "setup",
        //   testMatch: "login-setup.js",
        // },
        {
            name: "chromium",
            // dependencies: ["setup"],
            use: Object.assign({}, test_1.devices["Desktop Chrome"]),
        },
        // {
        //   name: "firefox",
        //   use: { ...devices["Desktop Firefox"] },
        // },
        // {
        //   name: "webkit",
        //   use: { ...devices["Desktop Safari"] },
        // },
        /* Test against mobile viewports. */
        // {
        //   name: 'Mobile Chrome',
        //   use: { ...devices['Pixel 5'] },
        // },
        // {
        //   name: 'Mobile Safari',
        //   use: { ...devices['iPhone 12'] },
        // },
        /* Test against branded browsers. */
        // {
        //   name: 'Microsoft Edge',
        //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
        // },
        // {
        //   name: 'Google Chrome',
        //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
        // },
    ],
    /* Run your local dev server before starting the tests */
    // webServer: {
    //   command: 'npm run start',
    //   url: 'http://127.0.0.1:3000',
    //   reuseExistingServer: !process.env.CI,
    // },
});
