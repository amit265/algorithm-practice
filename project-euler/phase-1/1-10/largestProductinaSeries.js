function largestProductinaSeries(numStr, k) {
  let maxProduct = 0;

  for (let i = 0; i <= numStr.length - k; i++) {
    if (numStr.slice(i, i + k).includes("0")) continue;

    let product = 1;

    for (let j = 0; j < k; j++) {
      product *= Number(numStr[i + j]);
    }

    if (product > maxProduct) {
      maxProduct = product;
    }
  }
  return maxProduct;
}


console.log(largestProductinaSeries("123456789", 2));
