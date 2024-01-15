// ACTIVITY 1 //
// Build a class for a coffee shop till.
// Have a method that takes names of drinks and totals the price.
// STRETCH: Have a separate class for a customer that holds their name and total cash they have.
// compare the total price of the ordered drinks against the total cash the customer can afford.

class CoffeeShop {
    constructor() {
        this.drinks = {
            // drinks and their prices.
            Coke: 1.5,
            Fanta: 1.5,
            Sprite: 1.5,
            Water: 1.0,
            Coffee: 2.0,
            Tea: 1.5,
        };

        this.total = 0; // total price of drinks ordered.
        this.orderList = []; // array of drinks ordered.
    }

    order(drink) {
        this.orderList.push(drink); // add drink to order array.
        this.total += this.drinks[drink]; // add drink price to total.
    }

    completeOrder() {
        console.log(`Coffee Shop Till: Your total is £${this.total}`); // log total price.
        return this.total; // return total price.
    }
}

class Person {
    constructor(name, cash) {
        this.name = name;
        this.cash = cash;
    }

    checkBalance(total) {
        if (this.cash >= total) {
            // check if customer has enough cash.
            this.cash -= total; // remove total from customer's cash.
            return console.log(`${this.name}: Your new balance is £${this.cash}`); // log new balance.
        } else {
            // if customer doesn't have enough cash.
            return console.log(`${this.name}: You have insufficient funds.`); // log insufficient funds.
        }
    }
}

const till = new CoffeeShop(); // create new coffeeshop instance.
const customer = new Person("Aaron", 5.0); // create new person instance with their name and balance.

till.order("Coke");
till.order("Coffee");
till.order("Fanta");
till.order("Water");
customer.checkBalance(till.completeOrder());
