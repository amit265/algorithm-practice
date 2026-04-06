// 8. Trim a String at Beginning or Ending

// Trim a String at the Beginning with stimStart() Method

// string.trimLeft();

{
  const str = "    amit";
  let newStr = str.trimStart();
  console.log("original string: " + "'" + str + "'");
  console.log("modified string: " + "'" + newStr + "'");
}

{
  const word = " hello ";
  console.log("Initial String: " + "'" + word + "'");

  // Trimming the string at both ends
  let new_word = word.trim();
  console.log("Modified String: " + "'" + new_word + "'");
}
