// Given an array of integers, return an array where each element is the product of all other elements except self.

// example ----> [1, 2, 3, 4] ---> [24, 12, 8, 6];

// product at index i = all elements to the left * all elments to the right

// for array [1,2,3, 4] at index of 2

// left product 1 * 2 = 2
// right prodcut 4 = 4
// result 2 * 4 = 8

// multiply all and divide by the current
// brute force - nested loops, multiply all except current  // O(n2)

// smart solution
// use prefix and suffix product // result O(n), space O(1)


function productOfArrayExceptSelf(nums) {
    const n = nums.length;
    const result = new Array(n).fill(1);
    console.log(result)

    // calculate left product

    let leftProduct = 1;
    for (let i = 0; i < n; i++){
        result[i] = leftProduct;
        leftProduct *= nums[i];
    }

    let rightProduct = 1;
    for(let i = n - 1; i >= 0; i--){
        result[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return result;
}


console.log(productOfArrayExceptSelf([1,2,3,4]));

