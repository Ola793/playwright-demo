const randomizer = {
  password: "topSecret%793",

  randomName(): string {
    let name = "";
    let randomNumber = 0;

    do {
      randomNumber = this.randomNumber();
    } while (randomNumber < 2 || randomNumber >= 20);

    while (name.length < randomNumber) {
      name += String.fromCharCode(97 + this.randomNumber());
    }

    const firstLetter = String(name.split("")[0].toUpperCase());
    const nameArr = name.split("");

    nameArr.shift();

    return firstLetter + nameArr.join("");
  },

  randomLastName(): string {
    return this.randomName();
  },

  randomEmail(): string {
    return `${this.randomName()}${this.randomNumber()}@gmail.com`;
  },

  randomNumber(): number {
    return Math.floor(Math.random() * 26);
  },
};

export default randomizer;
