// 11. Convert Celsius to Fahrenheit


//  T(°F) = T(°C) × 9/5 + 32


function celcToFahr(n) {
    return ((n * 9) / 5 + 32).toFixed(2)
}

console.log(celcToFahr(32))


// using arrow

const celctoFahrUsingArrow = (n) => ((n * 9)/5 + 32).toFixed(2);
console.log(celctoFahrUsingArrow(37))