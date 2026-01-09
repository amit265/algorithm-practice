// function to find the first unique character in a string

// example :
// "leetcode" -> 'l'
// "loveleetcode" -> 'v'
// "aabb" -> '_'




function firstUniqueChar(str) {

    let freq = {};

    for (let ch of str) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    for (let ch of str) {
        if (freq[ch] === 1) {
            return ch;
        }
    }

    return null;


}


// test the function

console.log(firstUniqueChar("leetcode")); // Output: 'l'

console.log(firstUniqueChar("loveleetcode")); // Output: 'v'

console.log(firstUniqueChar("aabb")); // Output: '_'

console.log(firstUniqueChar("swiss")); // Output: 'w'

console.log(firstUniqueChar("racecar")); // Output: 'e'