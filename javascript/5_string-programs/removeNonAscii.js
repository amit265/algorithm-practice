// 29. Remove All Non-ASCII Characters

// Approach 1: Using ASCII values in JavaScript regEx

{
  let str = "Hidd©©©en??Ascii ©©®®®Charac££ter";

  console.log(str);

  function removeAscii() {
    str = str.replace(/[^\x00-\x7F]/g, "");
    console.log(str);
  }

  removeAscii();
}

// Approach 2: Using Unicode in JavaScript regEx

{
  let str = "Hidd©©©en??Ascii ©©®®®Charac££ter";

  console.log(str);
  function removeAscii() {
    str = str.replace(/[\u{0080}-\u{FFFF}]/gu, "");
    console.log(str);
  }
  removeAscii();
}

// Approach 3: Using ASCII values with the Array filter method

{
  // Input String
  let str = "Hidd©©©en??Ascii ©©®®®Charac££ter";
  // Display input string
  console.log(str);

  // Funciot to remove ASCII characters
  // and display the output
  function gfg_Run() {
    // Using array.filter with ASCII values
    str = str
      .split("")
      .filter(function (char) {
        return char.charCodeAt(0) <= 127;
      })
      .join("");

    // Display output
    console.log(str);
  }

  // Funcion call
  gfg_Run();
}

//Approach 4: Using ES6 methods with a custom function

{
  // Input String
  let str = "Hidd©©©en??Ascii ©©®®®Charac££ter";
  // Display input string
  console.log(str);

  // Function to remove non-ASCII characters
  function removeNonASCII(input) {
    return input.replace(/[^\x00-\x7F]/g, "");
  }

  // Function to remove non-ASCII characters
  // and display the output
  function gfg_Run() {
    // Using custom function with replace method
    str = removeNonASCII(str);

    // Display output
    console.log(str);
  }

  // Function call
  gfg_Run();
}
