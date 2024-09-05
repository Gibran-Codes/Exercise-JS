const names = ["Anthony", "Ronaldo", "Messi", "Mudryk", "Ibrahimovic", "Rodrygo", "Salah"]
const longNames = names.filter(getLongNames);
const shortNames = names.filter(getShortNames);

console.log("Long Names:");
console.log(longNames);
console.log("Short Names:");
console.log(shortNames);


function getLongNames(element) {
    return element.length >= 6;
}
function getShortNames(element) {
    return element.length < 6;
}