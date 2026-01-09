// Search in Rotated Sorted Array

// what is rotated sorted array?

// A rotated sorted array is an array that has been sorted in ascending order and then rotated (or shifted) at some pivot point. For example, the array [4, 5, 6, 7, 0, 1, 2] is a rotated version of the sorted array [0, 1, 2, 4, 5, 6, 7].

// Mental model:

// “Find the pivot where the order breaks and decide which half to search.”

function searchInRotatedSortedArray(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // target found
        }

        // Determine which side is properly sorted
        if (arr[left] <= arr[mid]) {
            // Left side is sorted
            if (arr[left] <= target && target < arr[mid]) {
                right = mid - 1; // search in the left half
            } else {
                left = mid + 1; // search in the right half
            }
        } else {
            // Right side is sorted
            if (arr[mid] < target && target <= arr[right]) {
                left = mid + 1; // search in the right half
            } else {
                right = mid - 1; // search in the left half
            }
        }
    }

    return -1; // target not found
}

// time complexity: O(log n)
// space complexity: O(1)

// test the function
let arr1 = [4, 5, 6, 7, 0, 1, 2];
console.log(searchInRotatedSortedArray(arr1, 0)); // Output: 4  
console.log(searchInRotatedSortedArray(arr1, 3)); // Output: -1
console.log(searchInRotatedSortedArray(arr1, 4)); // Output: 0
console.log(searchInRotatedSortedArray(arr1, 7)); // Output: 3  
let arr2 = [30, 40, 50, 10, 20];
console.log(searchInRotatedSortedArray(arr2, 10)); // Output: 3
console.log(searchInRotatedSortedArray(arr2, 30)); // Output: 0
console.log(searchInRotatedSortedArray(arr2, 25)); // Output: -1

// edge cases
console.log(searchInRotatedSortedArray([], 5)); // Output: -1
console.log(searchInRotatedSortedArray([1], 1)); // Output: 0
console.log(searchInRotatedSortedArray([1], 0)); // Output: -1