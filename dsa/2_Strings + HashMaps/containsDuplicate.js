// function to check if it containes duplicates or not

// example :
// "hello" -> true (contains duplicates 'l')
// "world" -> false (no duplicates)
// "aabbcc" -> true (contains duplicates 'a', 'b', 'c')
// "abc" -> false (no duplicates)


function containsDuplicate(str) {

    let seen = new Set();

    for (let ch of str) {
        if (seen.has(ch)) {
            return true;
        }
        seen.add(ch);
    }

    return false;

}

// test the function
    
console.log(containsDuplicate("hello")); // Output: true    
console.log(containsDuplicate("world")); // Output: false
console.log(containsDuplicate("aabbcc")); // Output: true
console.log(containsDuplicate("abc")); // Output: false
console.log(containsDuplicate("programming")); // Output: true