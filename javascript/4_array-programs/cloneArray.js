// 34. Clone an Array

// 1. Using the Array.slice() Method

// We use the slice method to create a shallow copy of an array. This method creates a new array with a subset of the elements from the original array.

{
  const a = [1, 2, 3];
  const b = a.slice();
  console.log(b);
}

// 2. Using the spread Operator

{
  const a = [1, 2, 3];
  const b = [...a];
  console.log(b);
}

// 3. Using the Array.from() Method

{
  const a = [1, 2, 3];
  const b = Array.from(a);
  console.log(b);
}

// 4. Using the Array.concat() Method

{
  const a = [1, 2, 3];
  const b = [].concat(a);
  console.log(b);
}

// 5. Using a for loop

{
  const a = [1, 2, 3];
  const b = [];
  for (let i = 0; i < a.length; i++) {
    b.push(a[i]);
  }
  console.log(b);
}

// 6. Using the Array.map() Method

{
  const a = [1, 2, 3];
  const b = a.map((x) => x);
  console.log(b);
}

// 7. Using the Array.from() method with a map function

{
  const a = [1, 2, 3];
  const b = Array.from(a, (x) => x);
  console.log(b);
}

// 8. Using the Array.of() Method

{
  const a = [1, 2, 3];
  const b = Array.of(...a);
  console.log(b);
}

// 9. Using the JSON.parse() and JSON.stringify() Methods

{
  const a = [1, 2, 3];
  const b = JSON.parse(JSON.stringify(a));
  console.log(b);
}

// 10. Using the Object.assign() Method

{
  const a = [1, 2, 3];
  const b = Object.assign([], a);
  console.log(b);
}

// 11. Using Array.reduce() Method

{
  const a = [1, 2, 3, 4];
  const b = a.reduce((acc, val) => {
    acc.push(val);
    return acc;
  }, []);

  console.log("Original Array:", a);
  console.log("Cloned Array:", b);
}

// 12. Using the Array.flatMap() Method

{
  const a = [2, 3, 4, 5];
  const b = a.flatMap((elm) => [elm]);
  console.log(b);
  console.log(a === b);
}
