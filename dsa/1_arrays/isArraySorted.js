


function isArraySorted(arr) {
    if(!Array.isArray(arr)) throw new TypeError("Input must be an array");
    for(let i = 1; i < arr.length; i++) {
        if(arr [i] < arr [i - 1]) return false;
    }

    return true;
}    

console.log(isArraySorted([1, 2, 3, 4, 5])); // true


console.log(isArraySorted([])); // true

console.log(isArraySorted([10])); // true

console.log(isArraySorted([1, 2, 2, 3, 4])); // true

console.log(isArraySorted([1, 3, 2, 4, 5])); // false