// 2. Find the Square Root

function squareRoot(n) {
  return Math.sqrt(n);
}
console.log(squareRoot(144));

const squareRootUsingPow = (n) => Math.pow(n, 1 / 2);

console.log(squareRootUsingPow(169));

//Using Binary Search

function findSqrt(number) {
  let start = 0,
    end = number,
    mid,
    ans;

  while (start < end) {
    mid = Math.floor((start + end) / 2);

    if (mid * mid === number) {
      ans = mid;
      break;
    }

    if (mid * mid < number) {
      ans = start;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  let increment = 0.1;

  for (let i = 0; i < 5; i++) {
    while (ans * ans <= number) {
      ans += increment;
    }
    ans = ans - increment;
    increment = increment / 10;
  }
  return ans;
}


console.log(findSqrt(256));
