// 20. Get the Number of Vowels in a String

// 1. Using a for Loop

{
  const cVowels = (s) => {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (const char of s) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  };

  const s = "Hello world";
  console.log(cVowels(s));
}

// 2. Using Regular Expression

{
  const cVowels = (s) => {
    const matches = s.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
  };
  const s = "Hello worldeee";
  console.log(cVowels(s));
}

// 3. Using reduce() and indexOf() Methods

{
  const cVowels = (s) => {
    const vowels = "aeiouAEIOU";
    return [...s].reduce(
      (count, char) => (vowels.indexOf(char) !== -1 ? count + 1 : count),
      0,
    );
  };

  const s = "aeiouAEIOU";
  console.log(cVowels(s));
}

// 4. Using split() and Array.includes() Methods

{
  const cVowels = (s) => {
    const vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
    return s.split("").filter((char) => vowels.includes(char)).length;
  };

  const s = "amit";
  console.log(cVowels(s));
}

// 5. Using a Map

{
  const cVowels = (s) => {
    const vowelsMap = new Map([
      ["a", true],
      ["e", true],
      ["i", true],
      ["o", true],
      ["u", true],
      ["A", true],
      ["E", true],
      ["I", true],
      ["O", true],
      ["U", true],
    ]);

    let count = 0;
    for (const char of s) {
      if (vowelsMap.has(char)) {
        count++;
      }
    }

    return count;
  };

  const s = "Hello World";
  console.log(cVowels(s));
}
