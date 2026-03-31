// function to find the length of longest substring without repeating characters

// what is longest substring without repeating characters ?

// longest substring without repeating characters is a problem where we need to find the length of the longest substring in a given string that does not contain any repeating characters
    
// example :
// input: s = "abcabcbb"
// output: 3
// explanation: the answer is "abc", with the length of 3.

function lengthOfLongestSubstring(s) {
    let map = {};
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        let ch = s[right];

        if (map[ch] !== undefined && map[ch] >= left) {
            left = map[ch] + 1;
        }

        map[ch] = right;
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// test the function
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3

console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1

console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3

console.log(lengthOfLongestSubstring("dvdf")); // Output: 3

console.log(lengthOfLongestSubstring("anviaj")); // Output: 5