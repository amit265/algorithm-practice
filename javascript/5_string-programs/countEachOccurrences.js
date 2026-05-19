// JavaScript Program to Count the Occurrences of Each Character

// Using JavaScript Object

{
  const count = (s) => {
    const obj = {};
    for (const char of s) {
      obj[char] = obj[char] || 0;
    }
    return obj;
  };
  const s = "hello world";
  console.log(count(s));
}

// Using Map

{
  const count = (s) => {
    const map = new Map();
    for (const char of s) {
      map.set(char, (map.get(char) || 0) + 1);
    }
    return map;
  };

  const s = "hello world";
  console.log(count(s));
}

// Using forEach() with an Object

{
  const count = (s) => {
    const obj = {};
    [...s].forEach((char) => {
      obj[char] = (obj[char] || 0) + 1;
    });
    return obj;
  };

  const s = "hello world";
  console.log(count(s));
}


