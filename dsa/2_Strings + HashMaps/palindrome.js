// function to reverse a string

function isPalindrome(str) {
    // convert string to array
    let left = 0;
    let right = str.length - 1;

    while(left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
}


// test the function
console.log(isPalindrome("racecar")); // Output: true
    
console.log(isPalindrome("hello")); // Output: false    

console.log(isPalindrome("madam")); // Output: true