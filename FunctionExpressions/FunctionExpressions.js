const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const squares = numbers.map(function(element) {
    return Math.pow(element, 2);
})
console.log("Squares Numbers:");
console.log(squares);

const cubes = numbers.map(function(element) {
    return Math.pow(element, 3);
})
console.log("Cubes Numbers:");
console.log(cubes);

const evenNums = numbers.filter(function(element) {
    return element % 2 === 0;
})
console.log("Even Numbers:");
console.log(evenNums);

const oddNums = numbers.filter(function(element) {
    return element % 2 !== 0;
})
console.log("Odd Numbers:");
console.log(oddNums);

const total = numbers.reduce(function(total, numbers) {
    return total + numbers;
})
console.log("Total Numbers:");
console.log(total);
