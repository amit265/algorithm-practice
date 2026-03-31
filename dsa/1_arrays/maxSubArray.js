// anchor problem: Maximum subarray sum (Kadane's Algorithm)

// find the contiguous subarray within an array (containing at least one number) which has the largest sum


function maxSubArray(arr) {
    if(!Array.isArray(arr)) throw new TypeError("Input must be an array");

    let maxSum  = arr[0];
    let currentSum = arr[0];

    for(let i  = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum)
    }

    return maxSum;
}


console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6
console.log(maxSubArray([1])); // 1
console.log(maxSubArray([5,4,-1,7,8])); // 23
console.log(maxSubArray([-1,-2,-3,-4])); // -1
console.log(maxSubArray([0,-3,5,-2,1,-1,2,-1,3,-5,4])); // 8                