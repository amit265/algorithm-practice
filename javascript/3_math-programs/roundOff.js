// 18. Round off a Number to Next Multiple of 5

function roundOff(x) {
  if (x % 5 === 0) {
    return Math.floor(x / 5) * 5;
  } else {
    return Math.floor(x / 5) * 5 + 5;
  }
  // return Math.ceil(x/5) * 5;
}

console.log(roundOff(38));
console.log(roundOff(53));
console.log(roundOff(48));

