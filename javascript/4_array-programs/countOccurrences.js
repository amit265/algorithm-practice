// 31. Count Occurrences of All Items in an Array

//1. Using forEach() Method

{
  let a = ["apple", "banana", "apple"];
  const c = {};

  a.forEach((ele) => {
    c[ele] = (c[ele] || 0) + 1;
  });

  console.log(c);
}

//2. Using reduce() Method

{
  const fruits = ["apple", "banana", "apple", "orange", "banana", "grape"];

  let count = fruits.reduce((acc, curr) => {
    acc[curr] = (acc[curr] | 0) + 1;
    return acc;
  }, {});
  console.log(count);
}

// 3. Using filter() Method

{
  let a = ["red", "blue", "green", "red", "yellow", "blue", "pink"];

  let c = a.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  let dupli = Object.entries(c)
    .filter(([key, value]) => value > 1)
    .map(([key, value]) => ({ item: key, c: value }));

  console.log(dupli);
}

// 4. Using for...of Loop

{
  let a = ["apple", "banana", "apple", "orange", "banana", "grape"];

  let count = {};

  for (let item of a) {
    count[item] = (count[item] || 0) + 1;
  }

  console.log(count);
}

// 6. Using Array.prototype.sort() Method

{
  const a = ["apple", "banana", "apple", "orange", "banana", "banana"];

  const c = (a) => {
    const Arr = a.slice().sort();
    const count = {};

    for (let ele of Arr) {
      count[ele] = (count[ele] || 0) + 1;
    }
    return count;
  };

  console.log(c(a));
}
