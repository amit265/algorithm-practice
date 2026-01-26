// 1. Compute Power of a Number

// using js loops

function power(number, p){
    if(p < 1) return "enter positive value in power";
    let result = 1;
    for(let i = 1; i <= p ; i++){
        result *= number
    }

    return result;

}

console.log(power(125,2))



const powerUsingMath = (number, power) => Math.pow(number, power);
console.log(powerUsingMath(12,2))


const powerUsingExponent = (number, power) => number ** power;
console.log(powerUsingExponent(15, 2))