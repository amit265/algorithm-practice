// function to find longest common prefix among an array of strings

// example :
// ["flower","flow","flight"] -> "fl"
// ["dog","racecar","car"] -> ""


function longestCommonPrefix(strs) {

    if (!strs.length) return "";

    for(let i = 0; i < strs[0].length; i++) {
        let ch = strs[0][i];

        for(let s of strs) {
            if(i >= s.length || s[i] !== ch) {
                return strs[0].slice(0, i);
            }
        }
    }

    return strs[0];
}


// test the function

console.log(longestCommonPrefix(["flower","flow","flight"])); // Output: "fl"
    
console.log(longestCommonPrefix(["dog","racecar","car"])); // Output: ""

console.log(longestCommonPrefix(["interspecies","interstellar","interstate"])); // Output: "inters"

console.log(longestCommonPrefix(["throne","throne"])); // Output: "throne"

console.log(longestCommonPrefix(["throne","dungeon"])); // Output: ""