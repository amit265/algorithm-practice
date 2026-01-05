// functiont o calculate factorial of a number using recursion


// what is factorial ?

// factorial of a number n is the product of all positive integers less than or equal to n
// factorial of n is denoted by n!
// for example, 5! = 5 * 4 * 3 * 2 * 1 = 120


// recursion approach to calculate factorial


function factorial(n) {
  // base case
  if (n === 0 || n === 1) {
    return 1;
  }
  // recursive case
  return n * factorial(n - 1);
}   


// test the function

console.log(factorial(5)); // Output: 120

console.log(factorial(0)); // Output: 1

console.log(factorial(1)); // Output: 1

console.log(factorial(6)); // Output: 720

console.log(factorial(10)); // Output: 3628800