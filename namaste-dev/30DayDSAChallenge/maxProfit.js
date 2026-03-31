// Best Time to Buy and Sell Stock - a classic problem that looks simple but teaches powerful concepts!
// Given stock prices over time, find the maximum profit from a single buy-sell transaction.

// Given an array prices where prices[i] is the price of a given stock on the ith day
// have to maximize the profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock


// example input ----->  [7, 1, 5, 3, 6, 4] | output --> 5

// why ? buy on day 2 (price lowest) and sell on day 5(price highest)---> profit -> 6 - 1 = 5

// always to buy a the lowest price seen so far, and calculate potential profit at each step
// track the minimum price as we traverse
// at each day calculate profit if we sell today
// keep updating the maximum profit found

// O(n)   and  space --> O(1)
function maxProfit(prices){
    let minPrice = Infinity;
    let maxProfit = 0;

    for(let price of prices){
        // update minimum price
        minPrice = Math.min(minPrice, price);

        //calculate profit if sold today
        let profit = price - minPrice;

        // update maximum profit

        maxProfit = Math.max(maxProfit, profit);
    }

    return maxProfit;
}

console.log(maxProfit([7,1,5,3,6,4]));
