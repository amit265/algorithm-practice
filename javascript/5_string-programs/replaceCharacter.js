// 15. Replace Characters of a String

// JavaScript Program to Replace Characters of a String

// 1. Using map() & split() method to replace characters from String

{
  const str = "Hello user, welcome to GeeksforGeeks";
  let oldWord = "Hello";
  let newWord = "Hi";
  const replaceString = str
    .split(" ")
    .map((word) => (word === oldWord ? newWord : word))
    .join(" ");
  console.log(replaceString);
}

// Using String replace() Method to replace characters from String

{
  const str = "Welcome to GFG";
  const replStr = "GFG";
  const newStr = "Geeks";

  const updatedStr = str.replace(replStr, newStr);

  console.log(updatedStr);
}

// Using Regular Expression to replace characters from String

{
  const str = "Welcome to GeeksforGeeks";
  const searchString = "Welcome";
  const replaceString = "Hello";
  let regex = new RegExp(searchString, "g");
  let replacedString = str.replace(regex, replaceString);
  console.log(replacedString);
}


// Using split and join Method to Replace Characters from a String

{

    const str = "welcome to gfg";
    const oldStr = "gfg";
    const newStr = "Geeks";
    const updatedStr = str.split(oldStr).join(newStr)


    console.log(updatedStr);

}
