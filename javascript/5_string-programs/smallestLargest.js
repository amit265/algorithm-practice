// 40. Find Smallest and Largest Word in a String

// Using Regular Expressions

{
  function myFunction(str) {
    const words = str.match(/\b\w+\b/g);
    console.log(words);
    if (!words)
      return {
        smallest: "",
        largest: "",
      };

    let smallest = words[0];
    let largest = words[0];

    words.map((word) => {
      if (word.length < smallest.length) {
        smallest = word;
      }
      if (word.length > largest.length) {
        largest = word;
      }
    });

    return { smallest, largest };
  }

  let inputStr = "amit is a smart computer science student";
  console.log(myFunction(inputStr));
}

// Using reduce() method

{
  function myFunction(str) {
    let words = str.split(" ");
    if (words.length === 0) {
      return { smallest: "", largest: "" };
    }

    let smallest = words.reduce((a, b) => (a.length <= b.length ? a : b));
    let largest = words.reduce((a, b) => (a.length >= b.length ? a : b));
    return { smallest, largest };
  }

  let inputStr = "mary had a little lamb";
  console.log(myFunction(inputStr));
}

// Using for loop

{
  function myFunction(str) {
    let words = str.split(" ");
    if (words.length === 0) {
      return { smallest: "", largest: "" };
    }

    let smallest = words[0];
    let largest = words[0];

    for (let i = 1; i < words.length; i++) {
      let word = words[i];
      if (word.length < smallest.length) {
        smallest = word;
      }
      if (word.length > largest.length) {
        largest = word;
      }
    }
    return { smallest, largest };
  }

  let inputStr = "ram is good boy";
  console.log(myFunction(inputStr));
}
