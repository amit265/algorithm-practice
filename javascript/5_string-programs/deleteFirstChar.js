// 9. Delete First Character of a String

// The slice() method is frequently used to remove the first character by returning a new string from index 1 to the end.
{
  let s1 = "hihello";
  let s2 = s1.slice(1);
  console.log(s2);
}

//Similar to slice(), substring() creates a new string starting from index 1, effectively removing the first character.

{
  let str = "hihello";
  let newStr = str.substring(1);
  console.log(newStr);
}

// Using Array Destructuring with join()

{
  let s1 = "hihello";
  let s2 = [...s1].slice(1).join("");
  console.log(s2);
}

// Using replace() with Regular Expression

{
  let s1 = "hihello";
  let s2 = s1.replace(/^./, "");
  console.log(s2);
}
