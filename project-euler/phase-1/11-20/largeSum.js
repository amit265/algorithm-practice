function largeSum(arr) {
  let sum = 0n;
  for(const i of arr){
    sum += BigInt(i)
  }
  return Number(sum.toString().slice(0, 10));
}

// Only change code above this line

const testNums = [
  '37107287533902102798797998220837590246510135740250',
  '46376937677490009712648124896970078050417018260538'
];


console.log(largeSum(testNums))