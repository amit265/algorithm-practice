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

//Using String.prototype.match() and Math functions

{
  function findSmallestAndLargestWord(str) {
    const words = str.match(/\w+/g) || [];

    const smallest = Math.min(...words.map((word) => word.length));
    const largest = Math.max(...words.map((word) => word.length));
    const smallestWord = words.find((word) => word.length === smallest);
    const largestWord = words.find((word) => word.length === largest);

    return { smallest: smallestWord, largest: largestWord };
  }
  const result = findSmallestAndLargestWord("This is a sample string");
  console.log("Smallest word:", result.smallest); // Output: "a"
  console.log("Largest word:", result.largest); // Output: "string"
}

// Using the sort() Method

{
  function myFunction(str) {
    let words = str.match(/\b\w+\b/g);
    if (!words || words.length === 0) {
      return { smallest: "", largest: "" };
    }

    words.sort((a, b) => a.length - b.length);

    let smallest = words[0];
    let largest = words[words.length - 1];
    return { smallest, largest };
  }

  let inputStr = "India is a diverse country";
  console.log(myFunction(inputStr));
}
