// 1. Count Words of a String

// 1. Using split() Method

{
  const count = (s) => s.trim().split(/\s+/).length;

  const s = "Hello, this is a simple test";
  console.log(count(s));
}

// 2. Using Regular Expressions

{
  const count = (s) => (s.match(/\b\w+\b/g) || []).length;

  const s = "Hello, this is a simple test.";
  console.log(count(s));
}

// 3. Using reduce() Method

{
  const count = (s) =>
    s
      .trim()
      .split(/\s+/)
      .reduce((count) => count + 1, 0);
  const s = "Hello, this is a simple test";
  console.log(count(s));
}

// 4. Using a Loop

{
  const count = (s) => {
    let c = 0;
    let inWord = false;
    for (const char of s) {
      if (/\s/.test(char)) {
        inWord = false;
      } else if (!inWord) {
        inWord = true;
        c++;
      }
    }
    return c;
  };

  const s = "Hello, this is not a simple test";
  console.log(count(s));
}

// 5. Using matchAll() Method

{
  const count = (s) => [...s.matchAll(/\b\w+\b/g)].length;
  const s = "My name is amit";
  console.log(count(s));
}

// 6. Using Array.from() and filter() Methods

{
  const count = (s) => Array.from(s.split(/\s+/).filter(Boolean)).length;
  const s = "Hello i am not amit";
  console.log(count(s));
}

