// 23. Compare Case-Insensitive Strings

// 1. Using toLowerCase() or toUpperCase() Methods

{
  const comStr = (s1, s2) => s1.toLowerCase() === s2.toLowerCase();
  const s1 = "Hello";
  const s2 = "hello";
  console.log(comStr(s1, s2));
}

// 2. Using localeCompare() Method

{
  const comStr = (s1, s2) =>
    s1.localeCompare(s2, undefined, {
      sensitivity: "accent",
    }) === 0;

  const s1 = "Hello";
  const s2 = "hello";
  console.log(comStr(s1, s2));
}

// 3. Using Regular Expressions

{
  const comStr = (s1, s2) => new RegExp(`^${s1}$`, "i").test(s2);
  const s1 = "Hello";
  const s2 = "hello";
  console.log(comStr(s1, s2));
}

// 4. Using normalize() for Unicode Strings

{
  const comStr = (s1, s2) =>
    s1.normalize("NFD").toLowerCase() === s2.normalize("NFD").toLowerCase();
  const s1 = "hello";
  const s2 = "Hello";
  console.log(comStr(s1, s2));
}

// 5. Using Array.every() with Character-by-Character Comparison

{
  const comStr = (s1, s2) =>
    s1.length === s2.length &&
    [...s1].every(
      (char, index) => char.toLowerCase() === s2[index].toLowerCase(),
    );
  const s1 = "Hello";
  const s2 = "hello";
  console.log(comStr(s1, s2));
}
