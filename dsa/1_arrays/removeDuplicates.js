

// remove duplicates from sorted array

// sorted array => duplicates are adjacent

// pseudocode

// slow = 0

// for fast from 1 to n-1
// if(Arr[fast] != arr[slow]);
// slow++
// arr[slow] = arr[fast]

// return slow+1


function removeDuplciates(arr) {
    if(!Array.isArray(arr)) throw new TypeError("Input must be an array");
    if(arr.length === 0 ) return 0;

    let slow = 0;

    for(let fast = 1; fast < arr.length; fast++){
        if(arr[fast] !== arr[slow]) {
            slow++;
            arr[slow] = arr[fast];
        }
    }

    return slow + 1;
}



console.log(removeDuplciates([1,1,2,2,3,4,4,5])); // 5
console.log(removeDuplciates([1,1,1,1,1]));
console.log(removeDuplciates([])); // 0 
console.log(removeDuplciates([1,2,3,4,5])); // 5
console.log(removeDuplciates([1,1,2,3,3,4,5,5,5,6])); // 6