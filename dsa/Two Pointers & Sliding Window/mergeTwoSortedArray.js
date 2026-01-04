// function to merge two sorted arrays

// what is merge two sorted arrays ?

// merge two sorted arrays is a problem where we need to merge two sorted arrays into one sorted array.

// example :
// input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// output: [1,2,2,3,5,6]
// explanation: the merged array is [1,2,2,3,5,6].

function mergeTwoSortedArray(nums1, m, nums2, n) {
    let i = m - 1; // pointer for nums1
    let j = n - 1; // pointer for nums2
    let k = m + n - 1; // pointer for merged array

    while( j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }

}

// test the function

let nums1 = [1,2,3,0,0,0];
let m = 3;
let nums2 = [2,5,6];
let n = 3;
mergeTwoSortedArray(nums1, m, nums2, n);
console.log(nums1); // Output: [1,2,2,3,5,6]

nums1 = [4,5,6,0,0,0];
m = 3;
nums2 = [1,2,3];
n = 3;
mergeTwoSortedArray(nums1, m, nums2, n);
console.log(nums1); // Output: [1,2,3,4,5,6]