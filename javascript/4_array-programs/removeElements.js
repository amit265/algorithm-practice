// 3. Remove Elements from an Array

function removeElements(arr) {
  // from end
  arr.pop();

  // from middle

  // using splice
  // splice(index, how many to remove)
  arr.splice(1, 1);

  // frlom beginning
  arr.shift();

  return arr;
}

console.log(removeElements([1, 2, 3, 4, 5]));
