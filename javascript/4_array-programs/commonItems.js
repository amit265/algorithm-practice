// 12. Find Common Items from Two Arrays

// Using Loops - Simple

function commonItems(arr) {
  const a1 = [1, 2, 3];
  const a2 = [4, 5, 3];

  let hasCommonItem = false;

  for (let i = 0; i < a1.length; i++) {
    for (let j = 0; j < a2.length; j++) {
      if (a1[i] === a2[j]) {
        hasCommonItem = true;
        break;
      }
    }
  }
  return hasCommonItem;
}

console.log(commonItems());

// Using Set and some() - Efficient

const a1 = [1, 2, 3];
const a2 = [4, 5, 7];

const set = new Set(a2);
const hasCommonItem = a1.some((item) => set.has(item));

console.log(hasCommonItem);

// Using some() and includes()

const b = [2, 3, 4];
const c = [4, 5, 6];

const hasCommonItem1 = b.some((item) => c.includes(item));
console.log(hasCommonItem1);

// Using filter() to Find Common Items

const hasCommonItem2 = b.filter((item) => c.includes(item));
console.log(hasCommonItem2.length > 0);

//Using Set Intersection

const intersection = new Set(b.filter((item) => new Set(c).has(item)));
console.log(intersection.size > 0);
