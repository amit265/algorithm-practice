// 24. Generate All Combinations of a String

// Generating all combinations of a string in JavaScript

// Approach 1: Use .push() and .slice() method

{
  let possibleCombinations = (str) => {
    let combinations = [];
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j < str.length + 1; j++) {
        combinations.push(str.slice(i, j));
      }
    }
    return combinations;
  };

  console.log(possibleCombinations("cat"));
}

// Approach 2: Using the .charAt() and .concat() method

{
  let stringCombinations = (str) => {
    let strLength = str.length;
    let result = [];
    let currentIndex = 0;
    while (currentIndex < strLength) {
      let char = str.charAt(currentIndex);
      let x;
      let arrTemp = [char];
      for (x in result) {
        arrTemp.push("" + result[x] + char);
      }

      result = result.concat(arrTemp);
      currentIndex++;
    }

    return result;
  };

  console.log(stringCombinations("dog"));
}

// Approach 3: Using for loop and .push() method

{
  let combinations = (str) => {
    let tempArr = [];
    let resultArr = [];
    for (let i = 0; i < str.length; i++) {
      tempArr = [str[i]];
      let index = 0;
      while (resultArr[index]) {
        tempArr.push("" + resultArr[index] + str[i]);

        index++;
      }

      resultArr = resultArr.concat(tempArr);
    }

    return resultArr;
  };

  console.log(combinations("fox"));
}

// Approach 4: Using Recursion

{
  let combinationsRecursive = (str, index = 0, current = "") => {
    if (index === str.length) {
      console.log(current);
      return;
    }

    combinationsRecursive(str, index + 1, current + str[index]);

    combinationsRecursive(str, index + 1, current);
  };

  console.log(combinationsRecursive("toy"));
}
