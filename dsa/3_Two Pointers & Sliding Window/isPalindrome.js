// function to check if a given string is a palindrome, ignoring alphanumeric characters and case sensitivity

// what is palindrome?

//  A palindrome is a word, phrase, number, or other sequences of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization

// Example:
// Input: "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (!isAlphaNum(s[left])) left++;
    else if (!isAlphaNum(s[right])) right--;
    else {
      if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
      left++;
      right--;
    }
  }
  return true;
}

function isAlphaNum(ch) {
  return /[a-z0-9]/i.test(ch);
}

// test the function

console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome("No 'x' in Nixon")); // Output: true
console.log(isPalindrome("12321")); // Output: true
console.log(isPalindrome("12345")); // Output: false
console.log(isPalindrome("Able was I ere I saw Elba")); // Output: true
console.log(isPalindrome("Madam, in Eden, I'm Adam")); // Output: true
console.log(isPalindrome("This is not a palindrome")); // Output: false
