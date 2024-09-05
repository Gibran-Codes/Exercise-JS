let userName = window.prompt("enter ur username");

let letter = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();

console.log(letter)