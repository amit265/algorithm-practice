// find majority element in an array
// majority element is the element that appears more than n/2 times in the array


// Moore's Voting Algorithm



function majorityElement(arr) {
    if(!Array.isArray(arr)) throw new TypeError("Input must be an array");

    const countMap = {};
    const majorityCount = Math.floor(arr.length / 2);

    for(let elm of arr) {
        countMap[elm] = (countMap[elm] || 0) + 1;

        if(countMap[elm] > majorityCount) {
            return elm;
        }
    }

    return null; // no majority element
}

console.log(majorityElement([3, 3, 4, 2, 4, 4, 2, 4, 4])); // 4
console.log(majorityElement([3, 3, 4, 2, 4, 4, 2, 4])); // null
console.log(majorityElement([1, 1, 1, 2, 2])); // 1
console.log(majorityElement([])); // null