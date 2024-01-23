const randomizer = {
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

export default randomizer;
