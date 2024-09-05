// Ex 1: (swap the value of two variables)
let a = 1;
let b = 2;

[a, b] = [b, a]

console.log(a);
console.log(b);

// Ex 2: (swap elements in an array)
const heroes = ["Zilong", "Miya", "Alpha", "Gatot", "Layla", "Hanabi"];

[heroes[0], heroes[3]] = [heroes[3], heroes[0]];

console.log(heroes);

// Ex 3: (assign array elemnts into variables)
const goats = ["ronaldo", "messi", "mudryk", "anthony", "braithwaite"];

const [fourthGoat, fifthGoat, ...topThreePlayers] = goats

console.log(fourthGoat);
console.log(fifthGoat);
console.log(topThreePlayers);

// Ex 4: (extract values from an object)
const goat1 = {
    firstName: "Cristiano",
    lastName: "Ronaldo",
    age: 39,
    puskas: 1,
}
const goat2 = {
    firstName: "Lionel",
    lastName: "Messi",
    age: 37,
    worldCup: 1,
}
const {firstName, lastName, age, puskas="this goat has no puskas", worldCup = "this goat has no worldcup"} = goat1; // or goat 2

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(puskas);
console.log(worldCup);

// Ex 5: (destruct in function params)

function displayPerson({firstName, lastName, age, puskas="this goat has no puskas", worldCup = "this goat has no worldcup"}) {
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`puskas: ${puskas}`);
    console.log(`world cup: ${worldCup}`);
    
}

displayPerson(goat2);






