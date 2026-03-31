// 9. Check for Palindrome Number


// using string reversal

function isPalindrome(num) {
    let numStr = num.toString();
    let result = numStr.split('').reverse().join('');
    return numStr === result;
}

console.log(isPalindrome(12231)); // true


// using array every()

function isPalindromeArray(number){
    let numStr = number.toString();
    let numArr = numStr.split('');
    return numArr.every((num, index) => num === numArr[numArr.length - 1 -index]);
}

console.log(isPalindromeArray(124321))


// using XOR operator

function palindromeCheckUsingBitOperation(number){
    let numStr = number.toString();
    let length = numStr.length;
    let result= 0;
    for(let i = 0; i < Math.floor(length / 2); i++){
        result ^= numStr.charCodeAt(i) ^ numStr.charCodeAt(length - 1 -i);
    }

    return result === 0;
}


console.log(palindromeCheckUsingBitOperation(12345321))



