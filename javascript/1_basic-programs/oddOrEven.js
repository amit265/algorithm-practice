//check odd or even

function oddOrEven(n) {
    return n % 2 === 0;
}

console.log(oddOrEven(59))
console.log(oddOrEven(24))

function checkOddOrEven(n) {
    if (n & 1 == 1) {
        return "Number is odd";
    }
    return "Number is even";
}

console.log(checkOddOrEven(12));
console.log(checkOddOrEven(121));