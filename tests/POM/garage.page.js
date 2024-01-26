export class Garage {
  constructor(page) {
    this.page = page;
    this.navDropDown = page.locator("#userNavDropdown");
    this.dropDownProfileItem = page.locator(
      "a.dropdown-item[href='/panel/profile']",
      { hasText: "Profile" },
    );
    this.title = page.locator("h1");
    this.editButton = page.locator("button.btn.btn-primary", {
      hasText: "Edit profile",
    });
    this.editInput = page.locator("input#editProfilePhoto");
    this.saveButton = page.locator("button", { hasText: "Save" });
    this.profilePhoto = page.locator("img.profile_photo");
    this.addButton = page.locator("button.btn.btn-primary");
    this.carBrand = page.locator("select#addCarBrand");
    this.carModel = page.locator("select#addCarModel");
    this.mileage = page.locator("input#addCarMileage");
    this.addFuelExpense = page.locator(".car_add-expense");
    this.addMileage = page.locator("#addExpenseMileage");
    this.addExpenseLiters = page.locator("#addExpenseLiters");
    this.addTotalCost = page.locator("#addExpenseTotalCost");
    this.fuelExpenseButton = page.locator(
      "a.sidebar_btn[href='/panel/expenses']",
      {
        hasText: "Fuel expenses",
      },
    );
    this.carSelect = page.locator("#carSelectDropdown");
    this.mileageValue = page.locator("table tbody tr td").locator("nth=1");
    this.litersValue = page.locator("table tbody tr td").locator("nth=2");
    this.totalCostValue = page.locator("table tbody tr td").locator("nth=3");
  }

  async goto() {
    await this.page.goto("/");
  }
}
