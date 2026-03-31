// Find the Sum of All Elements of Given Array

function findSum() {
  let a = [4, 8, 7, 13, 12];
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
  }
  return sum;
}

console.log(findSum());

// using for each

let a = [4, 5, 6, 7];
let sum = 0;
a.forEach((x) => (sum += x));

console.log(sum);

// using reduce
let b = [1, 4, 5, 6, 7];

let reduceSum = b.reduce((acc, curr) => acc + curr, 0);
console.log(reduceSum);

// using recursion

function sumArray(a, idx) {
  if (idx === a.length) {
    return 0;
  }

  return a[idx] + sumArray(a, idx + 1);
}

console.log(sumArray(a, 0));


