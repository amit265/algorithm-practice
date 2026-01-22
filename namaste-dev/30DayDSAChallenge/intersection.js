// Intersection of two arrays
// a fundamental set theory problem that teaches efficient intersection operations using hash sets. Master the O(1) lookup pattern that's essential for data deduplication and filtering tasks.

// Return unique elements that are common in both arrays

// example input ---> nums1 = [1,2,2,1], nums2=[2,2]  | output ---> [2]

//1. store all elements of the first array in a set
//2. iterate through the second array and check if elements exist in the set
//3. Add common elements to a result Set to ensure uniqueness

// O(n + m)   space O(n)

const arr1 = [1, 2, 2, 1];
const arr2 = [2, 2];
function intersection(arr1, arr2) {
  let set = new Set(arr1);
  console.log(set);
  let result = [];

  for (let num of arr2) {
    if (set.has(num)) {
      result.push(num);
    }
  }

  return Array.from(new Set(result));
}

console.log(intersection(arr1, arr2));
