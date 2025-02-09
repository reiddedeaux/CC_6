//task 1 Business Profit Calculation

function calculateProfit(costPrice, sellingPrice, unitsSold){
    let profit =(sellingPrice - costPrice) * unitsSold; 
    return profit;
} // create a funtion to calculate profit
calculateProfit(20, 30, 100); 
calculateProfit(50, 70, 200);

console.log("Total Profit: $", calculateProfit(20, 30, 100));
console.log("Total Profit: $", calculateProfit(50, 70, 200)); //logging the resuluts of these functions


