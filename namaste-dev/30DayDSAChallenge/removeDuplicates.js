// Remove duplicates from sorted array
// a classic two-pointer technique that teaches in-place array modification without extra space. Master the slow-fast pointer pattern essential for optimizing array operations and acing space complexity questions


// Modify the sorted array in-place to remove duplicates and return new length of the array

// example ----- input: nums = [1,1,3] | output = 2


// 1. Use slow pointer to track position for next unique element
// 2. Use fast pointer to scan through all elements
// 3. When new unique value found, increment slow and copy value


// O(n)  space= O(1)

const arr = [1,1,2,2,3,3,4,4,4,4]
function removeDuplicates(nums) {
    if(nums.length === 0) return 0;

    // slow pointer for unique elements
    let slow = 0;

    // fast pointer to scan array
    for(let fast = 1; fast < nums.length; fast++){
        if(nums[fast] !== nums[slow]){
            slow++;
            nums[slow] = nums[fast];
        }
    }
    console.log(nums)
    return slow + 1;
}


console.log(removeDuplicates(arr));