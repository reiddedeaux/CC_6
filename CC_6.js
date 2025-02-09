//task 1 Business Profit Calculation

function calculateProfit(costPrice, sellingPrice, unitsSold){
    let profit =(sellingPrice - costPrice) * unitsSold; 
    return profit;
} // create a funtion to calculate profit
calculateProfit(20, 30, 100); 
calculateProfit(50, 70, 200);

console.log("Total Profit: $", calculateProfit(20, 30, 100));
console.log("Total Profit: $", calculateProfit(50, 70, 200)); //logging the resuluts of these functions

// Task 2 Sales Tax Computation
let calculateSalesTax = function(amount, taxRate){
    let salesTax = Math.floor(amount * taxRate);
    return salesTax;

}; //create a function to return sales tax
console.log("Sales Tax: $", calculateSalesTax(100, .07));
console.log("Sales Tax: $", calculateSalesTax(500, 0.1)); // logging the sales with sales tax into the console

//Task 3 Employee Bonus Calculation
let calculateBonus = (salary, performanceRating) =>{
    let bonus;
    if(performanceRating === "Excellent"){
        bonus = salary * .20;    
    } else if (performanceRating === "Good"){
        bonus = salary * .10;
    } else if(performanceRating === "Average"){
        bonus = salary * .05;
    }
    return bonus;
};

console.log("Bonus 1: $", calculateBonus(5000, "Excellent"));
console.log("Bonus 2: $", calculateBonus(7000, "Good")); //logging the salaries with the bonus based on their performance ratings

//Task 4 Subscription Pricing Model
let calculateSubscriptionCost = function(plan, months, discount = 0){
    let monthlyCost;
    if (plan === "Basic"){
        monthylCost = 10;
    } else if (plan === "Premium"){
        monthlyCost = 20;
    } else if (plan === "Enterprise"){
        monthlyCost = 50;
    };

let totalCost = monthlyCost * months;

totalCost = totalCost - discount;

return totalCost;
}; // created a function to find the subscription cost based on the plan

console.log(`Basic 6 Month Plan with $10 discount: $${calculateSubscriptionCost("Basic", 6, 10)}`);
console.log(`Premium 12 Month plan with no discount: $${calculateSubscriptionCost("Premium", 12, 0)}`); // logging the different plan with and without a discount

// Task 5 Currency Conversion

let convertCurrency = function(amount, exchangeRate){
    let convertedAmount = (amount * exchangeRate).toFixed(2);

    return convertedAmount;
}; // created a function to convert currency

console.log(`Converted Currency 1: $${convertCurrency(100,1.1)}`);
console.log(`Converted Currency 2: $${convertCurrency(250, .85)}`);

// Task 6 Higher-Order Function for Bulk Orders

let orders = [200, 600, 1200, 450, 800]; 

let applyBulkDiscount = (orders, discountFunction) => {
    let discountedOrders = orders.map(discountFunction);
    console.log("Updated Orders:", discountedOrders)
}; // a function to apply discounts to orders

applyBulkDiscount(orders, amount => amount > 500 ? amount * .9 : amount); // apply a 10 percent discount if the order is over 500

//Task 7 Business Expense Tracker

function createExpenseTracker() {
    let totalExpenses = 0;
    return function(expense) {
        totalExpenses += expense;
        return `Total Expense: $${totalExpenses}`
    };
}; // created a function to track expenses

let tracker = createExpenseTracker();
console.log(tracker(200));
console.log(tracker(150)); //logging total expenses of 200 and 150


