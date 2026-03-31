// 2. Add New Elements at the Beginning of an Array

const sample = [2, 3, 4, 5];
function addNewElements(arr) {
  // in front
  arr.unshift(1);
  arr.push(6);

  return arr;
}

console.log(addNewElements(sample));
