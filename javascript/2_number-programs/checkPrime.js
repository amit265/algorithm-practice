// 2. Check Prime Number

// basic approach

function isPrime(n) {
  if (n <= 1) return;
  for (let i = 2; i < n; i++) {
    if (n % i === 0)
      return `${n} is not a prime number because it is divisible by ${i}`;
  }
  return `${n} is prime number`;
}

console.log(isPrime(5));
console.log(isPrime(12));
console.log(isPrime(21));

// checking multiple number in an array

function checkPrime(arr) {
  let obj = {};
  for (let elm of arr) {
    let isPrime = true;
    if (elm <= 1) {
      isPrime = false;
    } else {
      for (let i = 2; i * i <= elm; i++) {
        if (elm % i === 0) {
          isPrime = false;
          break;
        }
      }
    }

    obj[elm] = isPrime;
  }

  return obj;
}

console.log(checkPrime([2, 3, 4, 5, 6, 7, 8, 9]));

// using Sieve of Eratosthenes Algorithm

// its the most efficient way to calculate non prime
function primeBySieve(max) {
  let a = new Array(max + 1).fill(true);
  a[0] = a[1] = false;

  for (let i = 2; i * i <= max; i++) {
    if (a[i]) {
      for (let j = i * i; j <= max; j += i) {
        a[j] = false;
      }
    }
  }

  let obj = {};
  for (let i = 0; i <= max; i++) {
    obj[i] = a[i];
  }

  return obj;
}


console.log(primeBySieve(50))
