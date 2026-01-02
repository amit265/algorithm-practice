//  reverse an array in place


// using two poiter
// one starting at beginning and other at the end



// pseudocode

// left = 0;
// right = n - 1;

// while left < right:

//     swap(arr[left], arr[right])

//     left++;
//     right--;







function reverseArray(arr){
    if(!Array.isArray(arr)) throw new TypeError("Input must be an array");
    if(arr.length === 0) return 0;

    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--
    }

    return arr;
}

console.log(reverseArray([1,2,3,4,5]));