// function to reverse a string


function reverseString(str) {

    // convert string to array

    let arr = str.split(" ");
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    return arr.join(" ");

}


// test the function
console.log(reverseString("Hello World from OpenAI")); // Output: "OpenAI from World Hello"

console.log(reverseString("JavaScript is fun")); // Output: "fun is JavaScript"

console.log(reverseString("Data Structures and Algorithms")); // Output: "Algorithms and Structures Data"