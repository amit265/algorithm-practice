function fiboEvenSum(n){
    let a = 1, b = 1;
    let sum = 0;

    while(b <= n){
        if(b % 2 === 0) sum += b;
        [a, b] = [b, a+b];
    }

    return sum;
}

console.log(fiboEvenSum(4000000))