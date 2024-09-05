class Goats {
    constructor(name, age, ...awards) {
        this.name = name;
        this.age = age;
        this.awards = new Awards(...awards);
    }
}

class Awards {
    constructor(ballonDor, ucl, puskas) {
        this.ballonDor = ballonDor;
        this.ucl = ucl;
        this.puskas = puskas;
    }
}

const goat1 = new Goats("Cristiano Ronaldo", 39, 5, 5, 1);
console.log(goat1.name);
console.log(goat1.age);
console.log(goat1.awards);
const goat2 = new Goats("Lionel Messi", 37, 8, 4, 0);
console.log(goat2.name);
console.log(goat2.age);
console.log(goat2.awards);


