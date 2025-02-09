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

