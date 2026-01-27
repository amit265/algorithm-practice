// 4. Reverse an Array
const val = [1, 2, 3, 4, 5];
function reverse(arr) {
  return arr.reverse();
}
console.log(reverse(val));

// using loop
const value = [2, 3, 45, 6, 7];
function reverseUsingLoop(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
  }
  return arr;
}

console.log(reverseUsingLoop(value));

// using recursion

function reverseUsingRecursion(arr) {
  if (arr.length === 0) return [];

  return [arr.pop()].concat(reverseUsingRecursion(arr));
}
console.log(reverseUsingRecursion([9, 10, 12]));

// using the reduce() method

function reverseUsingReduce(arr) {
  return arr.reduce((acc, curr) => [curr, ...acc], []);
}
console.log(reverseUsingReduce([5, 6, 7, 8, 9, 10]));

//using the spread operator
function reverseUsingSpreadOperator(arr) {
  return [...arr].reverse();
}

console.log(reverseUsingSpreadOperator([4, 5, 6]));

// using a stack

function reverseUsingStack(arr) {
  const rev = [];
  while (arr.length > 0) {
    rev.push(arr.pop());
  }

  return rev;
}

console.log(reverseUsingStack([3, 5, 8, 9]));
