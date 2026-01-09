// function to find longest substring without repeating characters

// what is longest substring without repeating characters ?

// longest substring without repeating characters is a problem where we need to find the length of the longest substring in a given string that does not contain any repeating characters.

// example :
// input: s = "abcabcbb"
// output: 3
// explanation: the longest substring without repeating characters is "abc", which has a length of 3.

function longestSubstring(s) {
  let map = {};
  let left = 0;
  let maxLength = 0;
  for (let right = 0; right < s.length; right++) {
    if (map[s[right]] >= left) {
      left = map[s[right]] + 1;
    }

    map[s[right]] = right;
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}


// test the function

console.log(longestSubstring("abcabcbb")); // Output: 3

console.log(longestSubstring("bbbbb")); // Output: 1

console.log(longestSubstring("pwwkew")); // Output: 3

console.log(longestSubstring("dvdf")); // Output: 3         
console.log(longestSubstring("anviaj")); // Output: 5

console.log(longestSubstring("tmmzuxt")); // Output: 5