let numbers = [1, 2, 3, 4, 5];

let max = Math.max(...numbers);
let min = Math.min(...numbers);


console.log(max);
console.log(min);

let username = "Gibran Codes";
let  letters = [...username].join("-");

console.log(letters);

let veggies = ["carrrot", "potato", "cabbage"];
let fruits = ["banana, durian, apple"];

let food = [...veggies, ...fruits, "egg", "tea", "bread"];

console.log(food);