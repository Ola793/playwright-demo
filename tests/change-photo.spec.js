import { test, expect } from "@playwright/test";
import { LandingPage } from "./POM/landing.page";

test.describe("Change avatar", () => {
  test("should change avatar", async ({ page }) => {
    const landingPage = new LandingPage(page);
    await page.goto("/");
    await page.pause();
    await landingPage.navDropDown.click();
  });
});
