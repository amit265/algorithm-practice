// contains duplicate
// [1,2,3,1] --> true

// return true if any values appears at least twice
// return false if every element is distinct

// input ---> [1, 2, 3, 1] --> true


const nums =  [1,2,3,1];

// javascript set , a set automatically stores only unique values

// time = O(n);
// space = O(n)


function containsDuplicate(nums){
    const seen = new Set();

    for (let num of nums){
        if(seen.has(num)){
            return true;
        }

        seen.add(num);
    }

    return false;
}


console.log(containsDuplicate(nums));




// one line solution

//  function containsDuplicate(nums){
// return  new Set(nums).size !== nums.length;
// }

// console.log(containsDuplicate([1,2]));





//brute force

// function containsDuplicates(nums){
//     for(let i = 0; i < nums.length; i++){
//         for(let j = i + 1; j < nums.length; j++){
//             if(nums[i] === nums[j]){
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// console.log(containsDuplicates(nums))