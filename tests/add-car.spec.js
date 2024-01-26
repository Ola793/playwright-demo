import { test, expect } from "@playwright/test";
import { Garage } from "./POM/garage.page";

test.describe("Add car", async () => {
  let garage;
  const carBrand = "Porsche";
  const carModel = "Panamera";
  const mileage = "350";
  const liters = "9.5";
  const totalCost = "522.5";

  test.beforeEach(async ({ page }) => {
    garage = new Garage(page);
    await garage.goto();
    await page.pause();
  });

  test("should add car", async () => {
    await expect(garage.title).toHaveText("Garage");
    await garage.addButton.getByText("Add car").click();
    await garage.carBrand.selectOption(`${carBrand}`);
    await garage.carModel.selectOption(`${carModel}`);
    await garage.mileage.fill("0");
    await garage.addButton.locator("nth=1").click();
  });

  test("should add expense", async () => {
    await garage.addFuelExpense.locator("nth=0").click();
    await garage.addMileage.fill(mileage);
    await garage.addExpenseLiters.fill(liters);
    await garage.addTotalCost.fill(totalCost);
    await garage.addButton.locator("nth=1").click();
  });

  test("should check expense", async () => {
    await garage.fuelExpenseButton.click();
    await expect(garage.title).toHaveText("Fuel expenses");
    await expect(garage.carSelect).toHaveText(`${carBrand} ${carModel}`);
    await expect(garage.mileageValue).toHaveText(`${mileage}`);
    await expect(garage.litersValue).toHaveText(`${liters}L`);
    await expect(garage.totalCostValue).toHaveText(
      `${Number(totalCost).toFixed(2)} UAH`,
    );
  });
});
