// 41. Min Manipulations to Make Two Strings Anagram (No Deletion)

// By evaluating Frequencies

{
  {
    // Javascript program for checking
    // strings are anagram or not
    function count(str1, str2) {
      let count = 0;
      let freq = new Array(26);
      for (let i = 0; i < freq.length; i++) {
        freq[i] = 0;
      }
      for (let i = 0; i < str1.length; i++)
        freq[str1[i].charCodeAt(0) - "a".charCodeAt(0)]++;
      for (let i = 0; i < str2.length; i++) {
        freq[str2[i].charCodeAt(0) - "a".charCodeAt(0)]--;
      }
      for (let i = 0; i < 26; ++i) {
        if (freq[i] !== 0) {
          count += Math.abs(freq[i]);
        }
      }
      return count / 2;
    }

    let str1 = "hello";
    let str2 = "world";
    // Printing result
    console.log(`Minimum number of manipulations 
required are : ${count(str1, str2)}`);
  }
}

// By Sorting and Comparison

{
  // Javascript program for checking
  // strings are anagram or not
  function count(str1, str2) {
    str1 = str1.split("").sort().join("");
    str2 = str2.split("").sort().join("");
    let i = 0,
      j = 0,
      count = 0;
    while (i < str1.length && j < str2.length) {
      if (str1[i] === str2[j]) {
        i++;
        j++;
      } else if (str1[i] < str2[j]) {
        i++;
        count++;
      } else {
        j++;
        count++;
      }
    }
    while (i < str1.length) {
      i++;
      count++;
    }
    while (j < str2.length) {
      j++;
      count++;
    }
    return Math.floor(count / 2);
  }

  let str1 = "hello";
  let str2 = "world";
  console.log(count(str1, str2));
}

// Using a Hash Map

{
  // Javascript program for checking
  // strings are anagram or not using Hash Map
  function count(str1, str2) {
    let freqMap = new Map();

    // Increment the frequency for each character in str1
    for (let char of str1) {
      if (freqMap.has(char)) {
        freqMap.set(char, freqMap.get(char) + 1);
      } else {
        freqMap.set(char, 1);
      }
    }

    // Decrement the frequency for each character in str2
    for (let char of str2) {
      if (freqMap.has(char)) {
        freqMap.set(char, freqMap.get(char) - 1);
      } else {
        freqMap.set(char, -1);
      }
    }

    // Calculate the total manipulations required
    let totalManipulations = 0;
    for (let value of freqMap.values()) {
      totalManipulations += Math.abs(value);
    }

    return totalManipulations / 2;
  }

  let str1 = "hello";
  let str2 = "world";
  // Printing result
  console.log(
    `Minimum number of manipulations required are : ${count(str1, str2)}`,
  );
}
