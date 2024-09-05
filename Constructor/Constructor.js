function Cars(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = function(){console.log(`You drive an ${this.color} ${this.year} ${this.make} ${this.model} car `);}
}
const car1 = new Cars("Mclaren", "Senna", 2021, "Orange");
car1.drive();
// console.log(car1);
const car2 = new Cars("Ferrai", "F40", 1992, "Red");
car2.drive();
// console.log(car2);
const car3 = new Cars("Bugatti", "Chiron", 2018, "Blue");
car3.drive();
// console.log(car3);

