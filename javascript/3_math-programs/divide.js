// 16. Find the Quotient and Remainder by Dividing an Integer

function divide(num, devisor) {
  return `Quotient = ${Math.floor(num / devisor)} and remainder is ${num % devisor}`;
}

console.log(divide(111, 10))