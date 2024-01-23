import { test, expect } from "@playwright/test";
import randomizer from "./randomizer.js";

test.describe("New user registration", () => {
  test("should register", async ({ page }) => {
    const name = page.locator("#signupName");
    const lastName = page.locator("#signupLastName");
    const email = page.locator("#signupEmail");
    const password = page.locator("#signupPassword");
    const reEnterPassword = page.locator("#signupRepeatPassword");

    const nameValue = randomizer.randomName();
    const lastNameValue = randomizer.randomLastName();
    const emailValue = randomizer.randomEmail();

    await page.goto("/");

    await page.locator("button", { hasText: "Sign up" }).click();

    await name.fill(nameValue);
    await expect(name).toHaveValue(nameValue);

    await lastName.fill(lastNameValue);
    await expect(lastName).toHaveValue(lastNameValue);

    await email.fill(emailValue);
    await expect(email).toHaveValue(emailValue);

    await password.fill(randomizer.password);
    await reEnterPassword.fill(randomizer.password);

    await page.locator("button", { hasText: "Register" }).click();

    await expect(page.locator("img.icon-btn")).toHaveAttribute("alt");
  });
});
