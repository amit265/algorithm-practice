// 17. Convert a Negative Number to Positive

function negativeToPositive(n) {
  //   return n < 0 ? n * -1 : n;
  return Math.sqrt(Math.pow(n, 2));
}

console.log(negativeToPositive(-19));
