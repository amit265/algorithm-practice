//Find Largest of Three Numbers

const largestNumber = (a, b, c) =>
  a >= b && a >= c ? a : b >= a && b >= c ? b : c;

console.log(largestNumber(17, 12, 34));

// spread operator

function largest(num1, num2, num3) {
  console.log(...[num1, num2, num3]);
  return Math.max(num1, num2, num3);
}

console.log(largest(10, 5, 12));
