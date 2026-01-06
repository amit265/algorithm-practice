// First and Last Occurrence

// Given a sorted array of integers, find the first and last occurrence of a given target value.

// Mental model:
// “Find the boundary positions of the target.”
// “Even after finding the answer, I keep searching.”

function firstOccurrence(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      result = mid; // potential first occurrence found
      right = mid - 1; // continue searching in the left half
    } else if (arr[mid] < target) {
      left = mid + 1; // search in the right half
    } else {
      right = mid - 1; // search in the left half
    }
  }

  return result; // return the first occurrence index or -1 if not found
}

// time complexity: O(log n)
// space complexity: O(1)

// test the function
let arr = [1, 2, 2, 2, 3, 4, 5];
console.log(firstOccurrence(arr, 2)); // Output: 1
console.log(firstOccurrence(arr, 3)); // Output: 4
console.log(firstOccurrence(arr, 6)); // Output: -1
console.log(firstOccurrence(arr, 1)); // Output: 0
console.log(firstOccurrence(arr, 5)); // Output: 6

// edge cases
console.log(firstOccurrence([], 2)); // Output: -1
console.log(firstOccurrence([2, 2, 2], 2)); // Output: 0
console.log(firstOccurrence([1, 3, 5], 2)); // Output: -1
