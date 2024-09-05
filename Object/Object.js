const person1 = {
    name: "Livia",
    age: 17,
    gender: "Female",
    sayHello: function() {console.log(`Hello my name is ${this.name}, i'm ${this.age} y'old and i'm a ${this.gender}`)},
    eat: () => console.log("i eat Mie Ayam, Meatball, Chicken Nuggets, Tempeh, Tofu."),
}
person1.sayHello()
person1.eat()

const person2 = {
    name: "Gibran",
    age: 16,
    gender: "Male",
    sayHello: () => console.log(`Hello my name is ${person2.name}, i'm ${person2.age} y'old and i'm a ${person2.gender}`),
    eat: () => console.log("i eat Mie Ayam."),
}
person2.sayHello()
person2.eat()