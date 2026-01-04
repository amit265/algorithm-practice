// function to find max of sum of subarray of size k

// what is max sum subarray of size k ?

// max sum subarray of size k is a problem where we need to find the maximum sum of a contiguous subarray of size k in an array.

// example :
// input: arr = [2,1,5,1,3,2], k = 3
// output: 9
// explanation: the subarray with the maximum sum is [5,1,3], which gives a sum of 9.

function maxSumSubarray(arr, k) {
  let windowSum = 0;
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    windowSum += arr[i];

    if (i >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[i - (k - 1)];
    }
  }

  return maxSum;
}


// test the function
    
console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // Output: 9    

console.log(maxSumSubarray([2, 3, 4, 1, 5], 2)); // Output: 9

console.log(maxSumSubarray([1, 2, 3, 4, 5], 4)); // Output: 14

console.log(maxSumSubarray([5, 1, 3, 7, 2, 8], 3)); // Output: 17

console.log(maxSumSubarray([-1, -2, -3, -4], 2)); // Output: -3