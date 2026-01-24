// 8. Find the Missing Number in a Sequence

// using maths

const arr = [1,2,3,4,5,7,8]
function findTheMissingNumber(arr){
    const n = arr.length + 1;
    return (n * (n + 1)/2) - arr.reduce((a,b) => a+b, 0);
}

console.log(findTheMissingNumber(arr))

// using hashing

function findMissing(arr){
    let n = arr.length + 1;
    let i;

    // create an array of size n and fill with 0

    let temp = new Array(n).fill(0);


    //if array elemt exist then set the frequency to 1

    for(i = 0; i < n; i++){
        temp[arr[i] - 1] = 1;
    }
    console.log(temp)

    let ans = 0;

    for(i = 0; i <= n; i++){
        if(temp[i] === 0)
            ans = i + 1;
    }
    console.log(ans);
}


findMissing(arr);