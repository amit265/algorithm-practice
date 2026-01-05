// function to reverse a string using recursion

// what is string reversal ?
    
// String reversal is the process of reversing the order of characters in a string
// For example, the reverse of "hello" is "olleh"

function reverseString(str) {
  // base case
  if (str === "") {
    return "";
  }
  // recursive case
  return reverseString(str.substr(1)) + str.charAt(0);
}

// time complexity: O(n)
// space complexity: O(n) due to call stack

// test the function

console.log(reverseString("hello")); // Output: "olleh"
    
console.log(reverseString("abcd")); // Output: "dcba"       

console.log(reverseString("racecar")); // Output: "racecar"

console.log(reverseString("JavaScript")); // Output: "tpircSavaJ"

console.log(reverseString("Recursion")); // Output: "noisruceR"