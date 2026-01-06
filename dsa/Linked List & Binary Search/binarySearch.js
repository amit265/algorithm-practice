// Binary Search Precision thinking

// what is binary search?

// Binary search is an efficient algorithm for finding a target value within a sorted array. It works by repeatedly dividing the search interval in half. If the target value is less than the middle element, the search continues on the left half; if it's greater, the search continues on the right half. This process is repeated until the target value is found or the interval is empty.

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // target found
        } else if (arr[mid] < target) {
            left = mid + 1; // search in the right half
        } else {
            right = mid - 1; // search in the left half
        }
    }

    return -1; // target not found
}


// time complexity: O(log n)
// space complexity: O(1)

// test the function
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(arr, 5)); // Output: 4
console.log(binarySearch(arr, 11)); // Output: -1
console.log(binarySearch(arr, 1)); // Output: 0
console.log(binarySearch(arr, 10)); // Output: 9
console.log(binarySearch(arr, 6)); // Output: 5

// edge cases
console.log(binarySearch([], 5)); // Output: -1
console.log(binarySearch([3], 3)); // Output: 0
console.log(binarySearch([3], 4)); // Output: -1