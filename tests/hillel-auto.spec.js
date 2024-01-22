import { test, expect } from "@playwright/test";

const randomazer = {
  password: "topSecret%793",

  randomName() {
    let name = "";
    let randomNumber = 0;

    do {
      randomNumber = this.randomNumber();
    } while (randomNumber < 2 || randomNumber >= 20);

    while (name.length < randomNumber) {
      name += String.fromCharCode(97 + this.randomNumber());
    }

    let firstLetter = String(name.split("")[0].toUpperCase());
    let nameArr = name.split("");

    nameArr.shift();

    return firstLetter + nameArr.join("");
  },

  randomLastName() {
    return this.randomName();
  },

  randomEmail() {
    return `${this.randomName()}${this.randomNumber()}@gmail.com`;
  },

  randomNumber() {
    return Math.floor(Math.random() * 26);
  },
};

test.describe("New user registration", () => {
  test("should register", async ({ page }) => {
    const name = page.locator("#signupName");
    const lastName = page.locator("#signupLastName");
    const email = page.locator("#signupEmail");
    const password = page.locator("#signupPassword");
    const reEnterPassword = page.locator("#signupRepeatPassword");

    const nameValue = randomazer.randomName();
    const lastNameValue = randomazer.randomLastName();
    const emailValue = randomazer.randomEmail();

    await page.goto("/");

    await page.locator("button", { hasText: "Sign up" }).click();

    await name.fill(nameValue);
    await expect(name).toHaveValue(nameValue);

    await lastName.fill(lastNameValue);
    await expect(lastName).toHaveValue(lastNameValue);

    await email.fill(emailValue);
    await expect(email).toHaveValue(emailValue);

    await password.fill(randomazer.password);
    await reEnterPassword.fill(randomazer.password);

    await page.locator("button", { hasText: "Register" }).click();
  });
});
