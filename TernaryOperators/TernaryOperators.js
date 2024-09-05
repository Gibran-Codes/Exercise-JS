let age = 18;
let message = age >= 18 ? "u r an adult!" : "u r a minor!";
console.log(message);

let time = 12;
let greetings = time <= 12 ? "Good Morning!" : "Good Afternoon";
console.log(greetings)

let purchaseAmount = 23;
let discount = purchaseAmount >= 100 ? 10 : 5;
console.log(`ur total is $${purchaseAmount - purchaseAmount * (discount/100)}`);