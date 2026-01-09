// move zeros to the end of the array

// pseudocode

// count = 0;

// for i from 0 to n-1:

//     if arr[i] != 0:

//         swap(arr[i], arr[count])

//         count++;

// return arr;

function moveZerosToEnd(arr) {
  if (!Array.isArray(arr)) throw new TypeError("Input must be an array");

  let index = 0;

  for (let num of arr) {
    if (num !== 0) {
      [arr[index], num] = [num, arr[index]];
      index++;
    }
  }

  while (index < arr.length) {
    arr[index++] = 0;
  }

  return arr;
}

console.log(moveZerosToEnd([0, 1, 0, 3, 12])); // [1,3,12,0,0]
console.log(moveZerosToEnd([0, 0, 0, 0])); // [0,0,0,0]
console.log(moveZerosToEnd([1, 2, 3, 4])); // [1,2,3,4]
console.log(moveZerosToEnd([4, 0, 5, 0, 6, 0, 7])); // [4,5,6,7,0,0,0]
console.log(moveZerosToEnd([])); // []
console.log(moveZerosToEnd([9, 0, 8, 0, 7, 0, 6])); // [9,8,7,6,0,0,0]
