// 13. Replace an Item from an Array

//Using Array Indexing

function replaceInArray() {
  let arr = [1, 2, 3, 4, 5];
  const idx = 2;
  const val = 10;
  arr[idx] = val;
  console.log(arr);
}

console.log(replaceInArray());

// Using the splice() Method

let arr = [10, 20, 30];
arr.splice(1, 1, 25);
console.log(arr);

// Using the indexOf() Method

const array = ["a", "b", "c"];

const idx = array.indexOf("a");
console.log(idx)

if (idx !== -1) {
  array[idx] = "z";
}

console.log(array);
