// 26. Convert User Input String into Regular Expression

{
  const str = "Geeks for Geeks";
  const regex = str;

  const reg = new RegExp(regex, "g");

  const result = str.match(reg);

  if (result) console.log(result);
  else console.log("Not Found");
}



