// function to find first repeating character in a string

// example :
// "abca" -> 'a'
// "swiss" -> 's'
// "hello" -> 'l'

function firstRepeatingChar(str) {
        
    let seen = new Set();       

    for (let ch of str) {
        if (seen.has(ch)) {
            return ch;
        }
        seen.add(ch);
    }

    return null;
}

// test the function
    
console.log(firstRepeatingChar("abca")); // Output: 'a' 
console.log(firstRepeatingChar("swiss")); // Output: 's'
console.log(firstRepeatingChar("hello")); // Output: 'l'
console.log(firstRepeatingChar("racecar")); // Output: 'r'
console.log(firstRepeatingChar("programming")); // Output: 'r'