// 5. Empty an Array

function empty(arr) {
//   console.log(arr.splice(0));
//   return arr.splice(0);

  return (arr = []);
  return (arr.length = 0);
}

console.log(empty([4, 5, 6, 7]));
