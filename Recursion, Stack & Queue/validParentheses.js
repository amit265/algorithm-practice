// function to validate parentheses

// what is valid parentheses?
// 1. Open parentheses must be closed by the same type of parentheses.
// 2. Open parentheses must be closed in the correct order.
// 3. An empty string is also considered valid.

function isValid(s) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of s) {
        if (map[char]) {
            // If it's an opening bracket, push the corresponding closing bracket onto the stack
            stack.push(map[char]);
        } else {
            // If it's a closing bracket, check if it matches the top of the stack
            if (stack.pop() !== char) {
                return false;
            }
        }
    }

    // If the stack is empty, all brackets were matched correctly
    return stack.length === 0;
}

// time complexity: O(n)
// space complexity: O(n)

// test the function

console.log(isValid("()")); // Output: true

console.log(isValid("()[]{}")); // Output: true

console.log(isValid("(]")); // Output: false

console.log(isValid("([)]")); // Output: false

console.log(isValid("{[]}")); // Output: true