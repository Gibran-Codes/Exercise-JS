function add(x, y) {
    return x + y;
}
console.log(add(7, 7));

function subStract(x, y) {
    return x - y;
}
console.log(subStract(7, 7));

function multiply(x, y) {
    return x * y;
}
console.log(multiply(7, 7));

function divide(x, y) {
    return x / y;
}
console.log(divide(7, 7));

function evenNumber(number) {
    return number % 2 === 0 ? true : false;
}
console.log(evenNumber(14));
console.log(evenNumber(7));

function validEmails(email) {
    return email.includes("@") ? true : false
}
console.log(validEmails("gibran@gmail.com"));
console.log(validEmails("maguiregmail.com"));
console.log(validEmails("ronaldo@gmail.com"));