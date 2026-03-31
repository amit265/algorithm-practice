// first unique character

// given a string s, find the first non-repeating characters  in it and return its index, if it doees not exist, return -1

// find index of first character that appears only once

// 1 - create a frequency map to count each character
// 2 - first pass: iterate theough string, count frequencies
// 3 - second pass: iterate through string again
// 4 - return index of first character with frequency 1
// 5 - if no unique character found, return -1

// example ----> "leetcode" ---> 0 (l at index 0 is the first unique character)
// "loveleetcode" --> 2

function firstUniqChar(s) {
  const freq = new Map();

  // first pass
  for (let char of s) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }

  // second pass: find first unique

  for (let i = 0; i <= s.length; i++) {
    if (freq.get(s[i]) === 1) {
      return i;
    }
  }
  return -1;
}

console.log(firstUniqChar("amitkumar"));
