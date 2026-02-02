// 17. Sort Numeric Array

const a = [5, 2, 9, 1, 7];

a.sort((x, y) => x - y);
console.log(a);

//descending

a.sort((x, y) => y - x);
console.log(a);



// Sort by absolute values
a.sort((x, y) => Math.abs(x) - Math.abs(y));
console.log(a);

