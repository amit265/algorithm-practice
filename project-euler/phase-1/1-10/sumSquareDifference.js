function sumSquareDifference(n) {
  const sum = sumNaturalNum(n);
  return sum * sum - sumSquareNaturalNum(n);
}

function sumNaturalNum(n) {
  return n * (n + 1) / 2;
}

function sumSquareNaturalNum(n) {
  return n * (n + 1) * (2 * n + 1) / 6;
}

console.log(sumSquareDifference(10)); // 2640
