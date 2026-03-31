// function to remove duplicates from a string

// example :
// "banana" -> "ban"
// "abracadabra" -> "abrcd"
// "aaaa" -> "a"


function removeDuplicates(str) {

    let seen = new Set();
    let result = "";

    for (let ch of str) {
        if (!seen.has(ch)) {
            seen.add(ch);
            result += ch;
        }
    }

    return result;

}

// test the function
    
console.log(removeDuplicates("banana")); // Output: "ban"
console.log(removeDuplicates("abracadabra")); // Output: "abrcd"
console.log(removeDuplicates("aaaa")); // Output: "a"
console.log(removeDuplicates("hello world")); // Output: "helo wrd"
console.log(removeDuplicates("programming")); // Output: "progamin"