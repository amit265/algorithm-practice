// whats an anagram?
// A word formed by rearranging the letters of another word

// example: s = "anagram", t = "nagaram" -------> true (same letters same count)
// s = "rat", t = "car" -------> false (different letters)




// count character frequencies




function isAnagram(s, t) {
    if(s.length !== t.length) return false;

    const count = {};

    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }

        console.log(count)

    for(let char of t) {
        if(!count[char]) return false;
        count[char]--;
    }

        console.log(count)

    return true;
}

console.log(isAnagram("cable", "aacble"))






//one liner approach

// function isAnagram(s, t) {
//     return s.split("").sort().join("") === t.split("").sort().join("");
// }

// console.log(isAnagram("cable", "acble"))













// sort both the strings and compare


// function isAnagram(s, t){
//     if(s.length !== t.length) return false;

//     const sortedS = s.split("").sort().join("");
//     const sortedT = t.split("").sort().join("");

//     return sortedT === sortedS;
// }

// console.log(isAnagram("cat", "tac"))
