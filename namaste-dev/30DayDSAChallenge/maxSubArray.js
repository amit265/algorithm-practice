// find the contiguous subarrray with the largest sum
// a subarray must contain consecutive elements

// kadane's algorithm

// input array ----> [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// output array ---> [-2, 1, -3, //4, -1, 2, 1//, -5, 4]  ---> [4, -1, 2, 1]

// sum = 6


// 1. keep adding numbsers to current Sum;

// 2. track the maximum sum seen so far

// 3. if current sum becomes negative, reset it to 0

// time O(n)
// space O(1)

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
function maxSubArray(nums){
    let currentSum = 0;
    let maxSum = nums[0];

    for(let num of nums){
        currentSum += num;

        maxSum = Math.max(maxSum, currentSum);

        if(currentSum < 0){
            currentSum = 0
        }
    }

    return maxSum;
}



console.log(maxSubArray(nums));


















// brute force 

// function maxSubarray(nums){
//     let maxSum = -Infinity;

//     for(let i = 0; i< nums.length; i++) {
//         let currentSum  = 0;
//         for(let j = i ; j < nums.length; j++){
//             currentSum += nums[j];
//             maxSum = Math.max(maxSum, currentSum);
//         }
//     }

//     return maxSum;
// }

// console.log(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))



