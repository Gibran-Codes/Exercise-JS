class Products {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }

    getTotal(salesTax){
        return this.price + (this.price * salesTax)
    }
}

const salesTax = 0.5;

const product1 = new Products("Sneakers", 20.00);
product1.displayProduct();
const totalPrice1 = product1.getTotal(salesTax);
console.log(`The total price (with Tax) : $${totalPrice1.toFixed(2)}`);
    

const product2 = new Products("Sweater", 19.50);
product2.displayProduct();
const totalPrice2 = product2.getTotal(salesTax);
console.log(`The total price (with Tax) : $${totalPrice2.toFixed(2)}`);

const product3 = new Products("Watch", 299.99);
product3.displayProduct();
const totalPrice3 = product3.getTotal(salesTax);
console.log(`The total price (with Tax) : $${totalPrice3.toFixed(2)}`);