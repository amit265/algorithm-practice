// Swap Two Variables

// using destructuring

let a = 50, b= 60;

console.log(`Swap before a = ${a}`);
console.log(`Swap before b = ${b}`);

[b,a] = [a,b];

console.log(`after swap a = ${a}`);
console.log(`after swap b = ${b}`);




// using temporary variable

let x = 20, y = 30;
let temp;

temp = x;
x = y;
y = temp;

console.log(`swapped x = ${x} and y = ${y}`)



// using arithmetic operations

let p = 10;
let q = 3;

p = p + q;
q = p - q;
p = p - q;

console.log(`after swapping p = ${p} and q = ${q}`)