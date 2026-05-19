// 38. Check if String Contains Any Digit

//1. Using Regular Expressions (RegExp)

{
  let s = "Hello 2024";
  let regex = /\d/;

  if (regex.test(s)) {
    console.log("the string contains a digit");
  } else {
    console.log("The string does not contain any digits.");
  }
}

// 2. Using String.split() and Array.some()

{
  let s = "Hello";
  let isDigit = s.split("").some((char) => !isNaN(char) && char !== " ");

  if (isDigit) {
    console.log("The string contains a digit");
  } else {
    console.log("The string does not contain any digits");
  }
}

// 3. Using Array.some() with charCodeAt()

{
  let s = "Hello 2026";
  let isDigit = [...s].some(
    (char) => char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57,
  );

  if (isDigit) {
    console.log("The string contains a digit");
  } else {
    console.log("The string does not contains any digits");
  }
}

// 4. Using String.match() Method

{
  let s = "Hello 2024";
  let digits = s.match(/\d/g);
  if (digits) {
    console.log("The string contains digits:", digits);
  } else {
    console.log("The string does not contain any digits");
  }
}


//5. Using String.search() Method

{
    let s = "Hello 2026";
    let digits = s.search(/\d/);
    if(digits !== -1) {
        console.log("The string contains digits")
    } else {
        console.log("The string does not contain any digits")
    }
}