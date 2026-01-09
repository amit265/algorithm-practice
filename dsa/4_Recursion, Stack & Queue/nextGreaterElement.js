// function to find next greater element for each element in the array
    
// what is next greater element ?

// next greater element for an element x is the first greater element on the right side of x in the array.
// For example, the next greater element for 4 in the array [4, 5, 2, 10] is 5.
// If there is no greater element for an element, we can consider the next greater element as -1.

function nextGreaterElement(arr) {
  const result = new Array(arr.length).fill(-1);
  const stack = [];

  for (let i = 0; i < arr.length; i++) {
    while (stack.length > 0 && arr[i] > arr[stack[stack.length - 1]]) {
      const index = stack.pop();
      result[index] = arr[i];
    }
    stack.push(i);
  }
  return result;
}

// time complexity: O(n)
// space complexity: O(n) for the stack and result array

// test the function

console.log(nextGreaterElement([4, 5, 2, 10]));
// Output: [ 5, 10, 10, -1 ]

console.log(nextGreaterElement([3, 7, 1, 9, 5]));
// Output: [ 7, 9, 9, -1, -1 ]

console.log(nextGreaterElement([1, 2, 3, 4, 5]));
// Output: [ 2, 3, 4, 5, -1 ]

console.log(nextGreaterElement([5, 4, 3, 2, 1]));
// Output: [ -1, -1, -1, -1, -1 ]

console.log(nextGreaterElement([2, 1, 2, 4, 3]));
// Output: [ 4, 2, 4, -1, -1 ]