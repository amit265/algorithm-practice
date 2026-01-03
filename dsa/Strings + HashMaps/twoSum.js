// function to claculate two sum

// what is two sum ?

// two sum is a problem where we need to find two numbers in an array that add up to a specific target sum

// example :
// input: nums = [2,7,11,15], target = 9
// output: [0,1]
// explanation: because nums[0] + nums[1] == 9, we return [0, 1]

function twoSum(nums, target) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    let need = target - nums[i];
    if (map[need] !== undefined) {
      return [map[need], i];
    }
    map[nums[i]] = i;
  }
}



// test the function
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]

console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]

console.log(twoSum([3, 3], 6)); // Output: [0, 1]

console.log(twoSum([1, 2, 3, 4, 5], 9)); // Output: [3, 4]

console.log(twoSum([-1, 0, 1, 2, -1, -4], 0)); // Output: [0, 2]
