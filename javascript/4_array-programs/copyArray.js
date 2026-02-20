// 29. Copy Array Items into Another Array

// 1. Using the Spread Operator (...)

{
  const a1 = [1, 2, 3, 4];
  const a2 = [...a1, 6, 7, 8, 9];

  console.log(a2);
}

// 2. Using slice() Method

// The slice() method is used to create a shallow copy of the a1. It copies all elements from index 0 to the end of the array by default.

{
  const a1 = [1, 2, 3, 4, 5];
  const a2 = a1.slice();

  console.log(a2);
}

// 3. Using Array.concat() Method

{
  const a1 = [1, 2, 3, 4, 5];
  const a2 = [].concat(a1);

  console.log(a2);
}

// 4. Using map() Method

{
  const a1 = [5, 10, 15, 20, 25];

  const a2 = a1.map((item) => item);
  console.log(a2);
}

// 5. Using Array.from() Method

{
  const a1 = [1, 2, 3, 4, 5];
  const a2 = Array.from(a1);
  console.log(a2);
}

// deep copy arrays

// All of the methods mentioned above create shallow copies of arrays. When the array contains objects, a shallow copy means the array structure is copied, but the objects inside the array will still be referenced by both the original and the new array. Here's an example:

{
  const arr = [
    { name: "mario", food: "pizza" },
    { name: "luigi", food: "spaghetti" },
  ];

  const arrCopy = [...arr];
  console.log(arr === arrCopy); // false
  console.log(arr[0] === arrCopy[0]); // true
  console.log(arr);
  console.log(arrCopy);
  console.log(arr === arrCopy); // false
}

// JSON methods

{
  const arr = [
    { name: "mario", food: "pizza" },
    { name: "luigi", food: "spaghetti" },
  ];

  const arrCopy = JSON.parse(JSON.stringify(arr));
  console.log(arr === arrCopy);
  console.log(arr[0] === arrCopy[0]);

  console.log(JSON.parse(JSON.stringify(arr)));
}
