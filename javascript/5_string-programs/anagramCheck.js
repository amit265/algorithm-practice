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




{


}