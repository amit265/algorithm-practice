// find missing number in an array of size n containing numbers from 0 to n

// use math or xor

// math approach

// expectedSum = n * (n + 1) / 2

// actualSum = sum of all elements in the array

// missingNumber = expectedSum - actualSum

function missingNumber(arr) {
    if(!Array.isArray(arr)) throw new TypeError("Input must be an array");

    const n = arr.length;
    const expectedSum = n * (n + 1) / 2;
    const actualSum = arr.reduce((acc, val) => acc + val, 0);

    return expectedSum - actualSum;
}

console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([0, 1])); // 2
console.log(missingNumber([9,6,4,2,3,5,7,0,1])); // 8
console.log(missingNumber([0])); // 1
console.log(missingNumber([])); // 0