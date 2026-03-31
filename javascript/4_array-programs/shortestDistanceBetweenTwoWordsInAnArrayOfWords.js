// 36. Find Shortest Distance Between Two Words in an Array

// Approach 1: Brute Force

{
  function shortestDistance(words, word1, word2) {
    let minDistance = Number.MAX_SAFE_INTEGER;
    let index1 = -1;
    let index2 = -1;
    let i = 0;

    while (i < words.length) {
      if (words[i] === word1) {
        index1 = i;
        minDistance =
          index2 !== -1
            ? Math.min(minDistance, Math.abs(index1 - index2))
            : minDistance;
      } else if (words[i] === word2) {
        index2 = i;
        minDistance =
          index1 !== -1
            ? Math.min(minDistance, Math.abs(index1 - index2))
            : minDistance;
      }
      i++;
    }

    return minDistance;
  }

  const wordsArray = ["apple", "banana", "orange", "apple", "kiwi", "cherry"];
  const word1 = "apple";
  const word2 = "banana";
  console.log(shortestDistance(wordsArray, word1, word2));
}

// Approach 2: Optimal Approach

{
  function shortestDistance(words, word1, word2) {
    let minDistance = Number.MAX_SAFE_INTEGER;
    let index1 = -1;
    let index2 = -1;
    let i = 0;
    while (i < words.length) {
      if (words[i] === word1) {
        index1 = i;
      } else if (words[i] === word2) {
        index2 = i;
      }
      if (index1 !== -1 && index2 !== -1) {
        minDistance = Math.min(minDistance, Math.abs(index1 - index2));
      }
      i++;
    }
    return minDistance;
  }

  const wordsArray = ["apple", "banana", "orange", "apple", "kiwi", "banana"];
  const word1 = "apple";
  const word2 = "banana";
  console.log(shortestDistance(wordsArray, word1, word2));
}
