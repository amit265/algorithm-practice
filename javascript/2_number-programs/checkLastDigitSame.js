// 5. Check if Two Numbers have Same Last Digit


function checkLastDigit(a,b){
    return a%10 === b%10
}

console.log(checkLastDigit(13, 15));
console.log(checkLastDigit(10, 40));
console.log(checkLastDigit(14, 44));