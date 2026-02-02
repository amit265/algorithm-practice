// 16. Find Duplicate Elements in an Array

// 1. Using Nested For In Loop
const a = [1, 2, 3, 4, 5, 2, 3, 6];

{
  let dupli = [];

  for (let i in a) {
    for (let j in a) {
      if (i !== j && a[i] === a[j] && !dupli.includes(a[i])) {
        dupli.push(a[i]);
      }
    }
  }

  console.log(dupli);
}

// 2. Using Sort() Method

{
  let dupli = [];
  a.sort();

  for (let i = 0; i < a.length - 1; i++) {
    if (a[i] === a[i + 1] && !dupli.includes(a[i])) {
      dupli.push(a[i]);
    }
  }
  console.log(dupli);
}

// 3. Using filter() and indexOf() Method

{
  let dupli = a.filter(
    (value, index) =>
      a.indexOf(value) !== index && a.lastIndexOf(value) === index,
  );
  console.log(dupli);
}

// 4. Using a Set
{
  let seen = new Set();
  let dupli = [];

  for (let i = 0; i < a.length; i++) {
    if (seen.has(a[i])) {
      dupli.push(a[i]);
    } else {
      seen.add(a[i]);
    }
  }

  console.log(dupli);
}

// 5. Using reduce() and includes() Method

{
  let dupli = [];

  a.reduce((acc, curr) => {
    if (acc.indexOf(curr) === -1 && a.indexOf(curr) !== a.lastIndexOf(curr)) {
      acc.push(curr);
    }
    return acc;
  }, dupli);

  console.log(dupli);
}

// 6. Using a Map Data Structure

{
  let map = new Map();
  let dupli = [];
  for (let i = 0; i < a.length; i++) {
    if (map.has(a[i])) {
      map.set(a[i], map.get(a[i]) + 1);
    } else {
      map.set(a[i], 1);
    }
  }

  for (let [key, val] of map) {
    if (val > 1) {
      dupli.push(key);
    }
  }

  console.log(dupli);
}
