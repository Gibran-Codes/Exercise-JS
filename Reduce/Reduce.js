const prices = [35, 45, 29, 18, 75]
const totalPrice = prices.reduce(getTotalPrice);

console.log(`$${totalPrice}`);


function getTotalPrice(total, prices) {
    return total + prices;
}