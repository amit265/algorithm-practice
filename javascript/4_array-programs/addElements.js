// 18. Add Elements to an Array Dynamically


// JavaScript Array Initialization
var a = ['Hi', 'There'];

// New element added dynamically.
a[2] = 'bro';

console.log(a);




// JavaScript Array Declared
var a = [];

// Elements pushed into the 
// array using push() method
a.push('a');
a.push('b');
a.push('b');

// Obtaining the value
console.log(a);

// JavaScript Array Declared
var a = [];

// Elements pushed into the 
// array using push() method
a.unshift('apple');
a.unshift('mango');
a.unshift('rice');

// Obtaining the value
console.log(a);




const language = ['HTML', 'Css'];

language.splice(
    language.length, // We want add at the END of our array
    0, // We do NOT want to remove any item
    'Javascript', 'react', // These are the items we want to add
);


console.log(language);



// JavaScript Array Initialization
let an = ['Hi', 'There'];

// New element added dynamically using spread operator
an = [...an, 'you'];

console.log(an);





// JavaScript Array Initialization
let c = ['Hi', 'There'];

// New elements added dynamically using concat() method
c = c.concat(['z', 'c', 'd']);

console.log(c);






let array = [1, 2, 3];
const addToArray = (arr, newElement, condition) => {
    return arr.map(item => item).concat(newElement);
};

// Adding a new element 4 dynamically
array = addToArray(array, 4);

console.log(array); // Output: [1, 2, 3, 4]