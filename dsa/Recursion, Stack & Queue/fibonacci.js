// function to calculate Fibonacci number using recursion

// what is Fibonacci ?

// Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones
// The sequence starts with 0 and 1
// For example, the first few Fibonacci numbers are: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

// recursion approach to calculate Fibonacci number

function fibonacci(n) {
  // base case

  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  // recursive case
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// time complexity: O(2^n)
// space complexity: O(n) due to call stack

// test the function

console.log(fibonacci(0)); // Output: 0

console.log(fibonacci(1)); // Output: 1

console.log(fibonacci(5)); // Output: 5

console.log(fibonacci(10)); // Output: 55

console.log(fibonacci(15)); // Output: 610