// 11. Remove Duplicate Elements from an Array (Unique Values)

function removeDuplicates() {
  let a = [10, 20, 20, 30, 40, 50, 50];
  let s = new Set(a);
  let a1 = [...s];
  return a1;
}

console.log(removeDuplicates());

//Using JavaScript forEach() with array.includes() method

let b = [10, 20, 30, 30, 40, 40];
let c = [];

b.forEach((elm) => {
  if (!c.includes(elm)) {
    c.push(elm);
  }
});

console.log(c);

// Using JavaScript filter() Method with indexOf method

const d = [10, 20, 30, 30, 40, 40, 50, 60];
const e = d.filter((item, index) => d.indexOf(item) === index);
console.log(e);

// Using JavaScript reduce() with array.includes() method

const f = d.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);

console.log(f);
