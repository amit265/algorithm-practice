// two pointers

// function to calculate two sum in a sorted array
    
// what is two sum ?

// two sum is a problem where we need to find two numbers in a sorted array that add up to a specific target sum

// example :
// input: nums = [2,3,4,5,6,7,8,9], target = 10
// output: [0,6]
// explanation: because nums[0] + nums[6] == 10, we return [0, 6]

function twoSumSorted(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
}   



// test the function

console.log(twoSumSorted([2, 3, 4, 5, 6, 7, 8, 9], 10)); // Output: [0, 6]
    
console.log(twoSumSorted([1, 2, 3, 4, 6, 8, 9], 12)); // Output: [2, 6]

console.log(twoSumSorted([0, 1, 2, 3, 4, 5, 6], 7)); // Output: [1, 6]

console.log(twoSumSorted([-3, -1, 0, 2, 4, 5], 1)); // Output: [2, 4]

console.log(twoSumSorted([1, 2, 3, 4, 5, 6, 7, 8, 9], 17)); // Output: [7, 8]

console.log(twoSumSorted([-5, -4, -3, -2, -1, 0, 1, 2], -3)); // Output: [0, 4]