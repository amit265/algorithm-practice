function longestKDistinctChar(s, k) {
  let freq = {};
  let left = 0;
  let maxLen = 0;
  let distinct = 0;

  for (let right = 0; right < s.length; right++) {
    if (!freq[s[right]]) distinct++;
    freq[s[right]] = (freq[s[right]] || 0) + 1;

    while (distinct > k) {
      freq[s[left]]--;
      if (freq[s[left]] === 0) distinct--;
      left++;
    }
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}


// test the function
    
console.log(longestKDistinctChar("eceba", 2)); // Output: 3

console.log(longestKDistinctChar("aa", 1)); // Output: 2

console.log(longestKDistinctChar("aabbcc", 2)); // Output: 4

console.log(longestKDistinctChar("abcadcacacaca", 3)); // Output: 11

console.log(longestKDistinctChar("abaccc", 2)); // Output: 4

console.log(longestKDistinctChar("aaabbb", 1)); // Output: 3
