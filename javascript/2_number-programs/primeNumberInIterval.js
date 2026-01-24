// 4. Print All Prime Numbers in an Interval

function primeNumberInInterval(min, max) {
  const obj = {};
  const primeArray = [];

  for (let i = min; i < max; i++) {
    if (isPrime(i)) {
      primeArray.push(i);
    }
  }
  return primeArray;
}

function isPrime(n) {
  if (n < 2) return false;
  if(n % 2 === 0) return false;
  for (let i = 2; i * i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(primeNumberInInterval(10, 50));
