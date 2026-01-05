// function to check palindrome using recursion

// what is palindrome ?

// A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).
// For example, "racecar", "madam", and
// "A man, a plan, a canal: Panama" are all palindromes.    

function isPalindrome(str) {
  // helper function to clean the string
  function cleanString(s) {
    return s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  }

  // cleaned string
  const cleanedStr = cleanString(str);  
    // recursive function to check palindrome   
    function checkPalindrome(s, left = 0, right = s.length - 1) {  
        // base case    
        if (left >= right) {
            return true;
        }    
        // if characters do not match    
        if (s[left] !== s[right]) {
            return false;
        }    
        // recursive case    
        return checkPalindrome(s, left + 1, right - 1);
    }    
    return checkPalindrome(cleanedStr, 0, cleanedStr.length - 1);
}

// time complexity: O(n)
// space complexity: O(n) due to call stack

// test the function

console.log(isPalindrome("racecar")); // Output: true

console.log(isPalindrome("hello")); // Output: false

console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true

console.log(isPalindrome("No 'x' in Nixon")); // Output: true

console.log(isPalindrome("JavaScript")); // Output: false

console.log(isPalindrome("Madam")); // Output: true

console.log(isPalindrome("12321")); // Output: true