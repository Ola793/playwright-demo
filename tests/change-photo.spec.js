import { test, expect } from "@playwright/test";
import { Garage } from "./POM/garage.page";

test.describe("Change avatar", () => {
  test("should change avatar", async ({ page }) => {
    const garage = new Garage(page);
    await garage.goto();
    await page.pause();
    await expect(garage.navDropDown).toBeVisible();
    await garage.navDropDown.click();
    await garage.dropDownProfileItem.click();
    await expect(garage.title).toHaveText("Profile");
    await garage.editButton.click();
    await garage.editInput.setInputFiles("tests/fixtures/mucha-2.png");
    await garage.saveButton.click();
    await page.reload();
  });
});
