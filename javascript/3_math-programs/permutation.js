// 20. Calculate nPr (Permutations)

//P(n, r) = n! / (n - r)!   for n >= r >= 0

function permutation(n, r) {
  if (n < r) return -1;
  return factorial(n) / factorial(n - r);
}

function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

console.log(permutation(13, 2));

// using for loop

function permutations(n, r) {
    if(n < r) return -1;

    let result = n;

    for(let i = 1; i < r; i++){
        result *= n - i;
    }
    return result;
}


console.log("4 P 1: ", permutation(4, 1))
