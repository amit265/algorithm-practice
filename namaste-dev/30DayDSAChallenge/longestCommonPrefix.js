// find the largest common prefix string amongst an array of strings. if there is no common prefix, return an empty string

// find the longest prefix shared by all strings

// 1 - take the first string as initial prefix
// 2 - iterate through reamining strings
// 3 - check if current string starts with prefix
// 4 - if not, reduce prefix by one character from end
// 5 - repeat until prefix matches or becomes empty

// exmple ---> ["flower", "flow", "flight"],   output--> "fl"

function longestCommonPrefix(str){
    if(!str.length) return "";
    let prefix = str[0];

    for(let i = 1; i < str.length; i++){
        // reduce prefix until it matches
        while(str[i].indexOf(prefix) !== 0){
            prefix = prefix.slice(0, -1);
            if(!prefix) return "";
        }
    }
    return prefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));