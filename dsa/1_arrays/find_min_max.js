// find minimum and maximum in an array



function findMinMax(arr) {
    if(!Array.isArray(arr)) throw new TypeError("Input must be an array");

    if(arr.length === 0) throw new Error("Array is empty");

    let min = arr[0];
    let max = arr[0];


    for (elm of arr) {
        if (elm < min) min = elm;
        if (elm > max) max = elm;   
    }

    return { "minValue": min, "maxValue": max };
}


console.log(findMinMax([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])); // { min: 1, max: 9 }
console.log(findMinMax([-10, -20, 0, 10, 20])); // { min: -20, max: 20 }
console.log(findMinMax([42])); // { min: 42, max: 42 }
