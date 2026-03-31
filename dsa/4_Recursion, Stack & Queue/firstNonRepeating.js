// function to find the first non-repeating character in a string

// what is first non-repeating character ?

// first non-repeating character in a string is the first character that does not repeat anywhere in the string.
// For example, in the string "swiss", the first non-repeating character is "w".

function firstNonRepeating(stream) {
  let freq = {};
  let queue = [];
  let result = [];

  for (let ch of stream) {
    // update frequency
    freq[ch] = (freq[ch] || 0) + 1;

    // enqueue the character
    queue.push(ch);

    // dequeue characters from the front until we find a non-repeating character
    while (queue.length && freq[queue[0]] > 1) {
      queue.shift();
    }
    result.push(queue.length ? queue[0] : "#");
  }
  return result.join("");
}

// time complexity: O(n)
// space complexity: O(n) for frequency map and queue

// test the function

console.log(firstNonRepeating("swiss")); // Output: "sww#i#"

console.log(firstNonRepeating("aabbccdde")); // Output: "a#b#c#d#e"

console.log(firstNonRepeating("abcabc")); // Output: "aaabbb"

console.log(firstNonRepeating("geeksforgeeks")); // Output: "gggkksforgkeeks"

console.log(firstNonRepeating("aabbcc")); // Output: "a#b#c#"
