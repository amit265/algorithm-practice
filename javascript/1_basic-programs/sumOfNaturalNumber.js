// 7. Find the Sum of Natural Numbers

// using loop

function findSumUsingLoop(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(findSumUsingLoop(10));

// using recursion

function findSumUsingRecursion(n) {
  if (n !== 0) return n + findSumUsingRecursion(n - 1);
  else return n;

  // if(n === 1) return 1;
  // if(n > 1) return n + findSumUsingRecursion(n - 1);
}

console.log(findSumUsingRecursion(10));


// using maths formula 

function findSumUsingMaths(n) {
    return n * (n +  1)/2
}

console.log(findSumUsingMaths(10))