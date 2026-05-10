// 32. Find the Longest Word Within the String

// Approach 1: Using regex and for...loop

{
  function longest(str) {
    str = str.match(/[a-zA-Z0-9]+/gi);
    let largest = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i].length > largest.length) {
        largest = str[i];
      }
    }

    return largest;
  }

  console.log(
    longest(
      "Hello guys this is geeksforgeeks where" + " students learn programming",
    ),
  );
}

// Approach 2: Using the split() and sort() method

{
  function longest(str) {
    str = str.split(" ");
    return str.sort((a, b) => b.length - a.length)[0];
  }

  console.log(
    longest("Hello guys this is geekforgeeks" + " Where students learn"),
  );
}

// Approach 3: Using split() and reduce() methods

{
  function longest(str) {
    str = str.split(" ");
    let index = str.reduce((acc, curr, i) => {
      if (curr.length > str[acc].length) {
        return i;
      }
      return acc;
    }, 0);

    return str[index];
  }

  console.log(
    longest(
      "Hello guys this is geeksforgeeks" + " where students learn programming",
    ),
  );
}

//  Approach 4: Using split() and for...loop

{
  let longestWord = (string) => {
    let stringg = string.split(" ");
    let longest = 0;
    let longest_word = null;
    for (let i = 0; i < stringg.length; i++) {
      if (longest < stringg[i].length) {
        longest = stringg[i].length;
        longest_word = stringg[i];
      }
    }
    return longest_word;
  };

  console.log(
    longestWord(
      "Hello guys this is geeksforgeeks where students learn programming",
    ),
  );
}

// Approach 5: Using sort() method

{
  function findLongestWord(inputString) {
    // Step 1: Split the string into an array of words
    const wordsArray = inputString.split(/\s+/);

    // Step 2: Sort the array based on word length
    const sortedWords = wordsArray.sort(function (a, b) {
      return b.length - a.length; // Sort in descending order by word length
    });

    // Step 3: Retrieve the longest word (first element after sorting)
    const longestWord = sortedWords[0];

    return longestWord;
  }

  // Example usage:
  const inputString = "JavaScript is an awesome programming language";
  const result = findLongestWord(inputString);

  console.log("Longest word:", result);
}

// Approach 6: Using map() and reduce() methods

{
  function longestWord(str) {
    // Split the string into an array of words
    const words = str.split(" ");

    // Use map() to create an array of objects containing each word and its length
    const wordLengths = words.map((word) => ({ word, length: word.length }));

    // Use reduce() to find the object with the maximum length
    const longestWordObj = wordLengths.reduce((prev, current) => {
      return prev.length > current.length ? prev : current;
    });

    // Return the word from the object with the maximum length
    return longestWordObj.word;
  }

  console.log(
    longestWord(
      "Hello guys this is geeksforgeeks where students learn programming",
    ),
  );
}



