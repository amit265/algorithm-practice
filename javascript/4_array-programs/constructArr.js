// 42. Construct an Array from its pair-sum Array

function constructArr(pair, n) {
  let arr = new Array(n);

  arr[0] = Math.floor((pair[0] + pair[1] - pair[n - 1]) / 2);
  for (let i = 1; i < n; i++) {
    arr[i] = pair[i - 1] - arr[0];
  }

  return arr;
}

function calculateOriginalArrayLength(pairSumArrayLength) {
  return Math.ceil(Math.sqrt(8 * pairSumArrayLength + 1) + 1) / 2;
}

let pair = [13, 11, 10, 13, 10, 9, 12, 7, 10, 9];

const arrayLength = pair.length;

const originalArrayLength = calculateOriginalArrayLength(arrayLength);

let n = originalArrayLength;

let orginalArr = constructArr(pair, n);

console.log("Original Arr", orginalArr);
