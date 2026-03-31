// function to check if two strings are anagrams

// what is anagram ?



// two strings are anagrams if they contain same characters with same frequency

// example :
// "listen" and "silent" are anagrams
// "triangle" and "integral" are anagrams
// "apple" and "pale" are not anagrams


function isAnagram(str1, str2) {

    if(str1.length !== str2.length) return false;

    let map = {};

    for(let ch of str1) {
        map[ch] = (map[ch] || 0) + 1;

    }

    for(let ch of str2) {
        if(!map[ch]) return false;
        map[ch]--;
    }

    return true;

}



// test the function

console.log(isAnagram("listen", "silent")); // Output: true

console.log(isAnagram("triangle", "integral")); // Output: true

console.log(isAnagram("apple", "pale")); // Output: false

console.log(isAnagram("anagram", "nagaram")); // Output: true

console.log(isAnagram("rat", "car")); // Output: false