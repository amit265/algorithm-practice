// 5. Factorial of a Number

function factorial(n) {
  let fact = 1;
  if (n === 0) return 1;
  if (n === 1) return 1;

  for (let i = 2; i <= n; i++) {
    fact *= i;
  }

  return fact;
}

console.log(factorial(3));
console.log(factorial(1));

// using recursio

function factorials(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorials(n - 1);
}

console.log(factorials(5));
console.log(factorials(10));
console.log(factorials(0));
console.log(factorials(1));
console.log(factorials(3));
console.log(factorials(4));

// using while looop

function factorialWhile(n) {
  let res = 1;

  while (n > 1) {
    res *= n;
    n--;
  }
  return res;
}

console.log(factorialWhile(1));
console.log(factorialWhile(2));
console.log(factorialWhile(3));
console.log(factorialWhile(105));

// using memoization

function factorialUsingMemo(n) {
  const cache = {};
  if (n === 0 || n === 1) {
    return 1;
  }
  if (cache[n]) {
    console.log("value from caeche");
    return cache[n];
  }
  cache[n] = n * factorialUsingMemo(n - 1);
  return cache[n];
}
console.log(factorialUsingMemo(105));
