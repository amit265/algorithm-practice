// 34. Replace All Dots in a String

// Using JavaScript replace() Method

{
  let str = "A.computer.Science.Portal";
  let res = str.replace(/\./g, " ");
  console.log("String 1: " + str);
  console.log("String 2: " + res);
}

// Using JavaScript Split() and Join() Method

{
  let str = "A.Computer.Science.Portal";
  let newStr = str.split(".").join(" ");
  console.log("String 1: " + str);
  console.log("String 2: " + newStr);
}

// Using JavaSccript reduce() Method and spread operator

{
  let str = "Geeks.for.Geeks";
  let newStr = [...str].reduce((s, c) => (c === "." ? s : s + c));
  console.log("String 1: " + str);
  console.log("String 2: " + newStr);

  console.log("String 1: " + str);

  console.log("String: 2 " + newStr);
}
