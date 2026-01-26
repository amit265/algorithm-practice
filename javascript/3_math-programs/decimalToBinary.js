// 13. Convert Decimal to Binary

// function decimalToBinary(n) {
//   return (n >>> 0).toString(2);
// }

// console.log(decimalToBinary(10));

// function decimalToBinary(n) {
//   let binary = "";
//   while (n > 0) {
//     binary = (n % 2) + binary;
//     n = Math.floor(n / 2);
//   }
//   return binary;
// }

// console.log(decimalToBinary(25))

// using toString(2) method

// function decimalToBinary(n) {
//   return n.toString(2);
// }

// console.log(decimalToBinary(5));

function decimalToBinary(N) {
  if (N === 0) return "0";

  let binaryArray = [];
  while (N > 0) {
    binaryArray.push(N & 1);
    N = N >> 1;
  }

  return binaryArray.reverse().join("");
}

let number = 10;
let binary = decimalToBinary(number);
console.log("The binary representation of the given number is: " + binary);
