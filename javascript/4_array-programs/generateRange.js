// 15. Generate a Range of Numbers and Characters

function generateRange(start = 1, end = 10) {
  if (typeof start !== typeof end)
    return `You are trying to find range between different data type, your "start" is "${typeof start}" and "end" is "${typeof end}"`;
  let length = end - start;
  if (typeof start === "number") {
    return Array.from({ length: length + 1 }, (_, index) => start + index);
  } else if (typeof start === "string") {
    let startValue = start.charCodeAt(0);
    let endValue = end.charCodeAt(0);
    let length = endValue - startValue;
    return Array.from({ length: length + 1 }, (_, index) =>
      String.fromCharCode(startValue + index),
    );
  }
}

console.log(generateRange(1, 100));

console.log(generateRange("A", "Z"));
console.log(generateRange("a", "z"));

console.log(generateRange("a", 10));




