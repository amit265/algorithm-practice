function largestPalindromeProduct(n) {
  const max = Math.pow(10, n) - 1;
  const min = Math.pow(10, n - 1);
  let largestPalindrome = 0;
  for(let i = max; i >= min; i--){
    for(let j = i; j >= min; j--){
      const product = i * j;
      if(product <= largestPalindrome) break;
      if(isPalindrome(product)){
        largestPalindrome = product
      }
    }
  }

  return largestPalindrome;
}

function isPalindrome(num){
  const s = num.toString();
  return s === s.split("").reverse().join("");
}

largestPalindromeProduct(3);

console.log(largestPalindromeProduct(2))