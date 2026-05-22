// 40. Find Smallest and Largest Word in a String

// Using Regular Expressions

{
  function myFunction(str) {
    const words = str.match(/\b\w+\b/g);
    console.log(words)
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
