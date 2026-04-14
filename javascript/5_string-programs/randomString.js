// 18. Generate a Random String

// 1. Generating the random string from the specified length of the character set:

{
  function generate(l) {
    let length = Number(l);
    if (typeof length !== "number") return "Invalid input, insert a number";
    const characters = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    const characterLength = characters.length;

    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characterLength));
    }
    return result;
  }

  console.log(generate("10"));
}

// 2. Generate Random String using String.fromCharCode()

{
  function generate(l) {
    let length = Number(l);
    if (typeof length !== "number") return "Invalid input, insert a number";
    let result = "";

    for (let i = 0; i < length; i++) {
      result += String.fromCharCode(97 + Math.floor(Math.random() * 26));
    }
    return result;
  }

  console.log(generate("5"));
}
