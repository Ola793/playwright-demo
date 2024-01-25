import { test as setup, chromium, expect } from "@playwright/test";
// import { STORAGE_STATE } from "../playwright.config";
import { STORAGE_STATE } from "../playwright.config";

setup("do login", async ({ page }) => {
  const browser = await chromium.launch();
  //   const page = await browser.newPage();
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

  await page.context().storageState({ path: STORAGE_STATE });
  // console.log("Storage state path:", STORAGE_STATE);
  // await browser.close();
});
