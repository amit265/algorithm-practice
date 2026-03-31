// 9. Find LCM of Two Numbers

function lcm(a, b) {
  let bigger = a > b ? a : b;
  let smaller = a > b ? b : a;
  let result;
  for (let i = 1; i <= bigger; i++) {
    let lcm1 = smaller * i;
    if (lcm1 % bigger === 0) {
      result = lcm1;
      break;
    }
  }
  return `LCM of ${smaller} and ${bigger} is ${result}`;
}

console.log(lcm(4, 8));
console.log(lcm(36, 108));
console.log(lcm(14, 78));
console.log(lcm(24, 18));
console.log(lcm(1, 21231238));

// Using GCD LCM Formula

// function for gcd
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
  return (a / gcd(a, b)) * b;
}

// Driver code
let a = 10,
  b = 5;
console.log(lcm(a, b));
