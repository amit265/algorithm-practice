// valid palindrome
// string sanitization and two pointer technique

// Given a string, determine is it is a palindrome considering only alphanumeric characters and ignoring cases

// example --->  input -> "A man, a plan, a canal: Panama"    output ---> true

// we have to ignore the special character - spaces, punctuation and special characters

// "A man, a plan, a canal: Panama" becomes "amanaplanacanalPanama"

// case insensitive , treat uppercase and lowercase same

// A palidrome reads the same forwards and backwards

// two pointer approach

// start from both ends and move towards the center

function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // skip non-alphanumeric char from left
    while (left < right && !isAlphanumeric(s[left])) {
      left++;
    }
    // skip non-alphanumeric char from right

    while (left < right && !isAlphanumeric(s[right])) {
      right--;
    }
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

//helper function

function isAlphanumeric(char) {
  return /[a-zA-z0-9]/.test(char);
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("nayan"));
console.log(isPalindrome("amit"));



//alternative

function isPalindromes(s){
    const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, "");

    const reversed = cleaned.split("").reverse().join("");
    return cleaned === reversed;
}


console.log(isPalindromes("A man, a plan, a canal: Panama"))
console.log(isPalindromes("amit"));
