function primeSummation(n) {
  let primeList = []
  
    for(let i = 2; i < n; i++){
     if(isPrime(i)) primeList.push(i);
    }

  const sum = primeList.reduce((acc, curr) => acc + curr, 0)
  console.log(primeList)
  return sum;
}


function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}


console.log(primeSummation(17));