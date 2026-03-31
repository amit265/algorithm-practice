// 14. Find Sum of Natural Numbers using Recursion

function sum(n) {
  return n === 1 ? 1 : n + sum(n - 1);
}

console.log(sum(10));
console.log(sum(1));
console.log(sum(12));
console.log(sum(3));
console.log(sum(4));

