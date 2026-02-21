// 38. Calculate Maximum Profit (Buying/Selling Share Twice)

/* 
In this approach, we are going to store the maximum possible profit of every subarray and solve the problem in the following two phases.

 Create a table profit[0..n-1] and initialize all values in it to 0. 
Traverse price[] from right to left and update profit[i] such that profit[i] stores maximum profit achievable from one transaction in subarray price[i..n-1]
Traverse price[] from left to right and update profit[i] such that profit[i] stores maximum profit such that profit[i] contains maximum achievable profit from two transactions in subarray price[0..i].
Return profit[n-1]


*/

// Approach 1: Naive approach

// Time complexity: O(n)

// Auxiliary space: O(n)

{
  function maxProfit(price, n) {
    // create profit array and initialize it as 0
    let profit = new Array(n);
    for (let i = 0; i < n; i++) {
      profit[i] = 0;
      /* Get the maximum profit with
    only one transaction
    allowed. After this loop,
    profit[i] contains maximum
    profit from price[i..n-1]
    using at most one trans. */

      let max_price = price[n - 1];
      for (let i = n - 2; i >= 0; i--) {
        //max_price has maximum
        // of price[i..n-1]
        if (price[i] > max_price) max_price = price[i];
        // We can get profit[i] by taking maximum of:
        // a) previous maximum, i.e., profit[i+1]
        // b) profit by buying at price[i] and selling at
        // max_price
        profit[i] = Math.max(profit[i + 1], max_price - price[i]);
      }

      // Get the maximum profit with
      // two transactions allowed
      // After this loop, profit[n-1]
      // contains the result

      let min_price = price[0];
      for (let i = 1; i < n; i++) {
        // min_price is minimum price
        // in price[0..i]
        if (price[i] < min_price) min_price = price[i];
        // Maximum profit is maximum of:
        // a) previous maximum, i.e., profit[i-1]
        // b) (Buy, Sell) at (min_price, price[i]) and add
        // profit of other trans, stored in profit[i]

        profit[i] = Math.max(profit[i - 1], profit[i] + (price[i] - min_price));
      }
    }
    let result = profit[n - 1];

    return result;
  }
  // Driver code
  let price = [2, 30, 15, 10, 8, 25, 80];
  let n = price.length;

  console.log("Maximum Profit = " + maxProfit(price, n));
}

// Approach 2: Recursive Approach

// Time Complexity : O(2^N)

// Auxiliary Space : O(N)

{
  function f(idx, buy, prices, cap, n) {
    if (cap == 0) {
      return 0;
    }

    if (idx == n) {
      return 0;
    }

    let profit = 0;

    // you can either buy or not buy
    if (buy == 0) {
      profit = Math.max(
        -prices[idx] + f(idx + 1, 1, prices, cap, n),
        f(idx + 1, 0, prices, cap, n),
      );
    } else {
      profit = Math.max(
        prices[idx] + f(idx + 1, 0, prices, cap - 1, n),
        f(idx + 1, 1, prices, cap, n),
      );
    }

    return profit;
  }

  function maxtwobuysell(prices, n) {
    return f(0, 0, prices, 2, n);
  }

  const arr = [2, 30, 15, 10, 8, 25, 80];
  const size = arr.length;
  console.log(maxtwobuysell(arr, size));
}
