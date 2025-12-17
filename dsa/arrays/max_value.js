// find top 2 maximum values in an array

function findTopTwoMax(arr) {
    if(!Array.isArray(arr)) throw new TypeError("Input must be an array");
        
    if(arr.length < 2) throw new Error("Array must contain at least two elements");

    let max1 = -Infinity;
    let max2 = -Infinity;


    for(let elm of arr) {
        if(elm > max1) {
            max2 = max1;
            max1 = elm;
        } else if(elm > max2 && elm < max1) {
            max2 = elm;
        }
    }

    return { "firstMax": max1, "secondMax": max2 };
}

console.log(findTopTwoMax([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])); // { firstMax: 9, secondMax: 6 }
console.log(findTopTwoMax([-10, -20, 0, 10, 20])); // { firstMax: 20, secondMax: 10 }
console.log(findTopTwoMax([42, 42, 42])); // { firstMax: 42, secondMax: -Infinity }
console.log(findTopTwoMax([5])); // Error: Array must contain at least two elements