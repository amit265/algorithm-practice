// given an array of integers and a target sum, find two numbers that add up to the target and return their indices.

// exampples: nums[2,7,11,15], target = 9; output: [0,1]

// ❌ The Naive Approach: Nested loops checking every pair → O(n²) time complexity This works, but can we do better?

// ✅ The Optimal Solution: Map/Object Magic!


/* 
How it works:
Create a Map to store {number: index}
For each number, calculate complement = target - number

Check if complement exists in Map
If yes → return indices
If no → store current number and continue
*/


// using Map
function twoSum_map(nums, target){
    const map = new Map();
    for(let i =0; i < nums.length; i++){
        const complement = target - nums[i];
        if(map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

//using object

function twoSum_object(nums, target){
    const seen = {};

    for(let i = 0; i < nums.length; i++){
        const complement = target - nums[i];
        if(complement in seen){
            return [seen[complement], i];
        }
        seen[nums[i]] = i;
    }
}


console.log(twoSum_map([2,7,11,15], 9))

console.log(twoSum_object([17,9,7,2], 9))