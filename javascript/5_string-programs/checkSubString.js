// 12. Check Whether a String Contains a Substring

// Using includes() - Most used and Simplest Method

{
  let s = "abcde";
  let res = s.includes("bcd");

  console.log(res);
}

// Using indexOf() - Gives Index of First Occurrence as well

{
  let s = "Hello, world!";
  let res = s.indexOf("world") !== -1;
  console.log(s.indexOf("world"));

  console.log(res);
}

// Using Regular Expressions (RegExp)

{
  let s = "Hello, world!";
  let pat = /world/;
  let res = pat.test(s);

  console.log(res);
}
