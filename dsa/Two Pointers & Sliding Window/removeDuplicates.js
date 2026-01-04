// function to remove duplicates in-place in a sorted array


// what is remove duplicates ?  

// remove duplicates is a problem where we need to remove duplicates from a sorted array in-place and return the new length of the array

// example :
// input: nums = [1,1,2]
// output: 2, nums = [1,2,_]
// explanation: your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the returned length.


function removeDuplicates(arr) {

    let slow = 0;

    for(let fast = 1; fast < arr.length; fast++) {
        if(arr[fast] !== arr[slow]) {
            slow++;
            arr[slow] = arr[fast];
        }
    }
    return slow + 1;
}


// test the function

console.log(removeDuplicates([1, 1, 2])); // Output: 2, nums = [1,2,_]

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])); // Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

console.log(removeDuplicates([1,2,3,4,5])); // Output: 5, nums = [1,2,3,4,5]

console.log(removeDuplicates([1,1,1,1,1])); // Output: 1, nums = [1,_,_,_,_]

console.log(removeDuplicates([])); // Output: 0, nums = []

console.log(removeDuplicates([-1,0,0,0,1,1,2,2])); // Output: 4, nums = [-1,0,1,2,_,_,_,_]