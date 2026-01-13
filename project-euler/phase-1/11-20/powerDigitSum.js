function powerDigitSum(exponent) {
  const value = 2n ** BigInt(exponent); // BigInt ** BigInt
  let sum = 0;                          // Number

  for (const digit of value.toString()) {
    sum += Number(digit);               // safe conversion
  }

  return sum;
}

console.log(powerDigitSum(15));    // 26
powerDigitSum(128);   // 166
powerDigitSum(1000);  // 1366

