import { Page, Response } from "@playwright/test";

export class Garage {
  constructor(private page: Page) {
    this.page = page;
  }

  readonly navDropDown = this.page.locator("#userNavDropdown");
  readonly dropDownProfileItem = this.page.locator(
    "a.dropdown-item[href='/panel/profile']",
    { hasText: "Profile" },
  );
  readonly title = this.page.locator("h1");
  readonly editButton = this.page.locator("button.btn.btn-primary", {
    hasText: "Edit profile",
  });
  readonly editInput = this.page.locator("input#editProfilePhoto");
  readonly saveButton = this.page.locator("button", { hasText: "Save" });
  readonly profilePhoto = this.page.locator("img.profile_photo");
  readonly addButton = this.page.locator("button.btn.btn-primary");
  readonly carBrand = this.page.locator("select#addCarBrand");
  readonly carModel = this.page.locator("select#addCarModel");
  readonly mileage = this.page.locator("input#addCarMileage");
  readonly addFuelExpense = this.page.locator(".car_add-expense");
  readonly addMileage = this.page.locator("#addExpenseMileage");
  readonly addExpenseLiters = this.page.locator("#addExpenseLiters");
  readonly addTotalCost = this.page.locator("#addExpenseTotalCost");
  readonly fuelExpenseButton = this.page.locator(
    "a.sidebar_btn[href='/panel/expenses']",
    {
      hasText: "Fuel expenses",
    },
  );
  readonly carSelect = this.page.locator("#carSelectDropdown");
  readonly mileageValue = this.page.locator("table tbody tr td").nth(1);
  readonly litersValue = this.page.locator("table tbody tr td").nth(2);
  readonly totalCostValue = this.page.locator("table tbody tr td").nth(3);

  goto(): Promise<null | Response> {
    return this.page.goto("/");
  }
}
