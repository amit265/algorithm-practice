// 25. Find Unique Characters of a String

// 1. Using Set (Most Common)

{
  const s1 = "javascript";
  const s2 = [...new Set(s1)];

  console.log(s2);
}

// 2. Using the Spread Operator with Set

{
  const s1 = "javascript";
  const s2 = Array.from(new Set(s1));

  console.log(s2);
}

// 3. Using indexOf() and lastIndexOf() Methods

{
  const s1 = "javascript";
  const s2 = s1
    .split("")
    .filter((char, index, arr) => arr.indexOf(char) === arr.lastIndexOf(char));

  console.log(s2);
}

// 4. Using Object Property Lookup

{
  const s = "javascript";
  const count = {};
  const unique = [];

  for (const char of s) {
    count[char] = (count[char] || 0) + 1;
  }

  for (const char in count) {
    if (count[char] === 1) unique.push(char);
  }

  console.log(unique);
}

// 5. Using Regular Expressions

{
  const s1 = "javascript";
  const s2 = s1
    .split("")
    .filter((char) => s1.match(new RegExp(char, "g")).length === 1);
  console.log(s2);
}

// 6. Using Reduce() Method

{
  const s = "javascript";
  const count = s.split("").reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  const unique = Object.keys(count).filter((char) => count[char] === 1);

  console.log(unique);
}

// 7. Naive Approach (Manual Loop)

{
  const s1 = "javascript";
  let s2 = "";
  for (const char of s1) {
    if (!s2.includes(char)) {
      s2 += char;
    }
  }

  console.log(s2.split(""));
}


