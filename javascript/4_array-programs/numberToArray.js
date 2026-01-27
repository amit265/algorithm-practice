// 8. Convert a Number into Array

function numberToArray(num) {
  return Array.from(String(num), (num) => Number(num));
}

console.log(numberToArray(123));

// Using mathematical operations

function numberToArrayUsingMath() {
  let num = 12345;
  let arr = [];

  while (num > 0) {
    arr.unshift(num % 10);
    num = Math.floor(num / 10);
  }
  console.log(arr);
}
numberToArrayUsingMath();

// Using a For Loop

function numberToArrayUsingFor() {
  let num = 4567;
  let arr = [];

  const str = String(num);

  for (let i = 0; i < str.length; i++) {
    arr.push(Number(str[i]));
  }
  console.log(arr);
}

numberToArrayUsingFor();
