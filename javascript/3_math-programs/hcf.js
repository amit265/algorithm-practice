// 8. Find GCD or HCF of Two Numbers
// hcf = product of numbers / LCM of numbers

function hcf(a,b){
    let smaller = a > b ? b : a;
    let hcf = 1;
    for(let i = 1;i <= smaller; i++){
        if(a % i === 0 && b % i === 0){
            hcf = i;
        }
    }

    return hcf;

}

console.log(hcf(10,20))


// using recursion

function hcfRecursion(a,b){
    if(b === 0) return a;
    return hcfRecursion(b, a%b);
}

console.log(hcfRecursion(30,45))



