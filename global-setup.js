import { chromium, expect } from "@playwright/test";
import { STORAGE_STATE } from "./playwright.config";

const dotenv = require("dotenv");

async function globalSetup(config) {
  dotenv.config({
    path: ".env",
    override: true,
  });

  const browser = await chromium.launch();
  const page = await browser.newPage();
  const response = await page.request.post(
    "https://qauto.forstudy.space/api/auth/signin",
    {
      data: {
        email: process.env.USER_LOGIN,
        password: process.env.USER_PASSWORD,
        remember: false,
      },
    },
  );

  const resp = await response.json();

  expect(resp.status).toEqual("ok");

  await page.context().storageState({ path: "login.json" });
  await browser.close();
}

module.exports = globalSetup;
