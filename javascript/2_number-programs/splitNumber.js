// 7. Split a Number into Individual Digits


function splitNumber(n){
    return n.toString().split("").map(a => Number(a));
}

console.log(splitNumber(150))