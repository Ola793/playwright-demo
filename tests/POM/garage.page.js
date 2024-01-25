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
  }

  async goto() {
    await this.page.goto("/");
  }
}
