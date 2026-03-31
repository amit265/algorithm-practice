// 9. Find the Factors of a Number

function factors(n) {
  const factor = [];
  factor.push(1);

  for (let i = 2; 2 * i <= n; i++) {
    if (n % i === 0) factor.push(i);
  }
  factor.push(n);
  return factor;
}

console.log(factors(99999));


// using while

function findFactors(n){
    let factors = []
    let i = 1;
    while(i < n){
        if(n % i === 0){
            factors.push(i);
        }
        i++;
    }
    return factors;
}

console.log(findFactors(500))
