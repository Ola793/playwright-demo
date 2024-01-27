import { test, expect } from "@playwright/test";
import { Garage } from "./POM/garage.page";
import { toMatchImageSnapshot } from "jest-image-snapshot";

expect.extend({ toMatchImageSnapshot });

const newAvatar = "tests/fixtures/mucha-2.png";

test.describe("Change avatar", () => {
  test("should change avatar and check if it is changed", async ({ page }) => {
    const garage = new Garage(page);
    await garage.goto();
    await expect(garage.navDropDown).toBeVisible();
    await garage.navDropDown.click();
    await garage.dropDownProfileItem.click();
    await expect(garage.title).toHaveText("Profile");
    const previousAvatar = await page.screenshot();
    await garage.editButton.click();
    await garage.editInput.setInputFiles(newAvatar);
    await garage.saveButton.click();
    await page.reload();
    expect(previousAvatar).not.toMatchSnapshot();
  });
});
