// print array and compute the sum of its elements

function printArrayAndComputeSum(arr) {
    if(!Array.isArray(arr)) throw new Error("Input must be an array");

    let n = arr.length;
    if(n === 0){
        console.log("array is empty")
        return 0;
    }
    let sum = 0;

    for(elm of arr) {
        console.log(elm)
        sum += elm;
    }

    return sum;
   
}


console.log("Sum:", printArrayAndComputeSum([1, 2, 3, 4, 5])); // prints elements and returns 15
