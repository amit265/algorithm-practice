// 36. Check if String Follows Order Defined by Pattern

// 1. using javascript loops

{
  function checkPattern(str, pattern) {
    // lcmi -> last char max index
    // ccmi -> current char max index
    // ccmin -> current char min index

    let lcmi = -1,
      ccmi = -1,
      ccmin = -1;
    let matchValue = true;
    lcmi = lastOcc(str, pattern[0]);
    for (i = 1; i < pattern.length; i++) {
      ccmi = lastOcc(str, pattern[i]);
      ccmin = firstOcc(str, pattern[i]);
      if (lcmi < ccmi && lcmi < ccmin) {
        matchValue = true;
      } else {
        matchValue = false;
      }
      lcmi = ccmi;
      if (matchValue == false) break;
    }
    return matchValue;
  }

  function lastOcc(str, chr) {
    let currentIdx = 99999999,
      maxIdx = -1;
    for (j = 0; j < str.length; j++) {
      if (chr == str[j]) {
        currentIdx = j;
        if (currentIdx > maxIdx) maxIdx = currentIdx;
      }
    }
    return maxIdx;
  }
  function firstOcc(str, chr) {
    let currentIdx = 99999999,
      minIndex = 999999999;
    for (k = 0; k < str.length; k++) {
      if (chr == str[k]) {
        currentIdx = k;
        if (currentIdx < minIndex) minIndex = currentIdx;
      }
    }
    return minIndex;
  }
  console.log(checkPattern("engineers rock", "er"));
  console.log(checkPattern("engineers rock", "egr"));
  console.log(checkPattern("engineers rock", "gsr"));
}

// Using JavaScript Map

{
  function checkPattern(str, pattern) {
    let words = str.split(" ");
    if (pattern.length !== words.length) return false;
    let map1 = new Map();
    let map2 = new Map();
    for (let i = 0; i < pattern.length; i++) {
      let key = pattern[i];
      let value = words[i];
      if (map1.has(key) || map2.has(value)) {
        if (map1.get(key) !== value) return false;
        if (map2.get(value) !== key) return false;
      } else {
        map1.set(key, value);
        map2.set(value, key);
      }
    }
    return true;
  }

  console.log(checkPattern("engineers rock", "er"));
  console.log(checkPattern("engineers rock", "egr"));
  console.log(checkPattern("engineers rock", "gsr"));
}
