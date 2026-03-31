function divisibleTriangleNumber(limit) {
  let n = 1;

  while (true) {
    let a, b;

    if (n % 2 === 0) {
      a = n / 2;
      b = n + 1;
    } else {
      a = n;
      b = (n + 1) / 2;
    }

    const divisors = countDivisors(a) * countDivisors(b);

    if (divisors > limit) {
      return (n * (n + 1)) / 2;
    }

    n++;
  }
}

function countDivisors(n) {
  let count = 1;
  let factor = 2;

  while (factor * factor <= n) {
    let power = 0;
    while (n % factor === 0) {
      n /= factor;
      power++;
    }
    if (power > 0) {
      count *= power + 1;
    }
    factor++;
  }

  if (n > 1) count *= 2; // remaining prime
  return count;
}

console.log(divisibleTriangleNumber(500));
