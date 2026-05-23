// 41. Min Manipulations to Make Two Strings Anagram (No Deletion)

// By evaluating Frequencies

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
