function latticePaths(n) {

  let result = 1;

  for (let i = 1; i <= n; i++) {
    result = result * (n + i) / i;
  }

  return result;
}

console.log(latticePaths(20))
