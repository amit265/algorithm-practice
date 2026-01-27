//1. Get the First and Last Item in an Array

function firstAndLastItem(Arr) {
  if (Arr.length === 0) return null;
  return [Arr[0], Arr[Arr.length - 1]];
  
}

console.log(firstAndLastItem([2, 3, 45, 8, 9, 0]));

console.log() 

