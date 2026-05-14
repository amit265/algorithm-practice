// 35. Check if String is an Anagram

// Approach 1: Using split(), sort(), and join() methods;

{
  function checkAnagram(a, b) {
    if (a.length !== b.length) return false;

    let str1 = a.split("").sort().join("");
    let str2 = b.split("").sort().join("");
    console.log(str1, str2);
    let result = str1 === str2;
    return result;
  }

  console.log(checkAnagram("amit", "tim"));

  console.log(checkAnagram("amit", "tims"));
  console.log(checkAnagram("amit", "tima"));
}

// Approach 2: Using for loop

{
  function checkAnagram(a, b) {
    let array = {};
    if (a === b) return true;
    if (a.length !== b.length) return false;

    let minCharCode = Math.min(getMinCharCode(a), getMinCharCode(b));

    for (let i = 0; i < a.length; i++) {
      let res = a.charCodeAt(i) - minCharCode;
      array[res] = (array[res] || 0) + 1;
    }

    for (let j = 0; j < b.length; j++) {
      let res = b.charCodeAt(j) - minCharCode;
      if (!array[res]) return false;
      array[res]--;
    }

    return true;
  }

  function getMinCharCode(str) {
    let minCharCode = Infinity;
    for (let i = 0; i < str.length; i++) {
      let charCode = str.charCodeAt(i);
      if (charCode < minCharCode) {
        minCharCode = charCode;
      }
    }
    return minCharCode;
  }

  console.log("Using for loop", checkAnagram("abc", "cba"));
  console.log("Using for loop", checkAnagram("abd", "cba"));
  console.log("Using for loop", checkAnagram("abc", "cb"));
}

// Approach 3: Using a Frequency map

{
  const areAnagrams = (str1, str2) => {
    if (str1.length !== str2.length) return false;

    const frequencyMap = (str) => {
      const map = {};
      for (let char of str) {
        map[char] = (map[char] || 0) + 1;
      }

      return map;
    };

    console.log(frequencyMap(str1));
    console.log(frequencyMap(str2));

    const map1 = frequencyMap(str1);
    const map2 = frequencyMap(str2);

    for (let char in map1) {
      if (map1[char] !== map2[char]) return false;
    }

    return true;
  };

  console.log(areAnagrams("listen", "silent"));

  console.log(areAnagrams("hello", "world"));
}
