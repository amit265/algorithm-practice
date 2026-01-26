// 7. Print Fibonacci Series

function fibonacci(n) {
  if (n === 1) return 0;
  if (n === 2) return 1;
  let fib,
    num1 = 0,
    num2 = 1;
  for (let i = 3; i <= n; i++) {
    fib = num1 + num2;
    num1 = num2;
    num2 = fib;
  }
  return fib;
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(8));

// using recursion

function fibonacciRecursion(n) {
  if (n == 1) return 0;
  if (n === 2) return 1;
  return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
}

console.log(fibonacciRecursion(8));

// using generator

function* fibonacciGenerator(num) {
  let num1 = 0;
  let num2 = 1;
  yield num1;
  yield num2;
  for (let i = 3; i <= num; i++) {
    let sum = num1 + num2;
    num1 = num2;
    num2 = sum;
    yield num2;
  }
}

function fibonaccii(num) {
  let result;

  const iterator = fibonacciGenerator(num);

  for (let i = 0; i < num; i++) {
    result = iterator.next().value;
  }
  return result;
}

console.log("Fibonacci(5): " + fibonacci(5));
console.log("Fibonacci(8): " + fibonacci(8));
