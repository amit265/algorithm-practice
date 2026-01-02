// rotate array by k position

// pseudocode
    
// k = k % n  // to handle k > n    
// reverse(arr, 0, n - 1)
// reverse(arr, 0, k - 1)
// reverse(arr, k, n - 1)

// 1. reverse whole array
// 2. reverse first k elements
// 3. reverse remaining n-k elements    

function rotateArrayByKPosition(arr, k) {
    if(!Array.isArray(arr)) throw new TypeError("Input must be an array");
    if(arr.length === 0) return arr;

    k = k % arr.length;

    reverse(arr, 0, arr.length - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, arr.length - 1);

    return arr;
}

function reverse(arr, start, end) {
    while(start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

console.log(rotateArrayByKPosition([1,2,3,4,5,6,7], 3)); // [5,6,7,1,2,3,4]
console.log(rotateArrayByKPosition([-1,-100,3,99], 2)); // [3,99,-1,-100]
console.log(rotateArrayByKPosition([1,2,3,4,5], 7)); // [4,5,1,2,3]
console.log(rotateArrayByKPosition([], 3)); // []
console.log(rotateArrayByKPosition([1], 10)); // [1]    