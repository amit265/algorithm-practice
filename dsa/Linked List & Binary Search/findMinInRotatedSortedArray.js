// find minimum in rotated sorted array
    
// what is rotated sorted array?

// A rotated sorted array is an array that has been sorted in ascending order and then rotated (or shifted) at some pivot point. For example, the array [4, 5, 6, 7, 0, 1, 2] is a rotated version of the sorted array [0, 1, 2, 4, 5, 6, 7].

// Mental model:

// “Find the pivot where the order breaks.”

function findMinInRotatedSortedArray(arr) {
    let left = 0;
    let right = arr.length - 1;

    // If the array is not rotated
    if (arr[left] < arr[right]) {
        return arr[left];
    }

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        // Check if mid element is greater than the rightmost element
        if (arr[mid] > arr[right]) {
            left = mid + 1; // minimum must be in the right half
        } else {
            right = mid; // minimum could be at mid or in the left half
        }
    }

    return arr[left]; // left is now at the minimum element
}

// time complexity: O(log n)
// space complexity: O(1)

// test the function
let arr1 = [4, 5, 6, 7, 0, 1, 2];
console.log(findMinInRotatedSortedArray(arr1)); // Output: 0

let arr2 = [30, 40, 50, 10, 20];
console.log(findMinInRotatedSortedArray(arr2)); // Output: 10

let arr3 = [3, 4, 5, 1, 2];
console.log(findMinInRotatedSortedArray(arr3)); // Output: 1

let arr4 = [11, 13, 15, 17];
console.log(findMinInRotatedSortedArray(arr4)); // Output: 11 (not rotated)

// edge cases
console.log(findMinInRotatedSortedArray([1])); // Output: 1
console.log(findMinInRotatedSortedArray([2, 1])); // Output: 1
console.log(findMinInRotatedSortedArray([1, 2, 3, 4, 5])); // Output: 1 (not rotated)