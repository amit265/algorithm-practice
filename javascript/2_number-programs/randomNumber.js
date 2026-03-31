// 1. Generate Random Number in Given Range

function randomNumber(min, max){
    return random = Math.floor(Math.random() * (max - min)) + min;
}

console.log(randomNumber(10, 100));
console.log(randomNumber(1, 3));
console.log(randomNumber(20, 50))


// using for loop

// some random number between min and max

function someRandomNumber(min = 10, max = 100, count = 5){
    
    const random = [];
    for(let i = 0; i < count; i++){
        const n = Math.floor(Math.random() *  (max - min + 1)) + min;
        random.push(n)
    }
    return random;
}

console.log(someRandomNumber());
console.log(someRandomNumber(500, 1000, 10));


// random decimal number

const randomDecimal = (min, max) => Math.random() * (max - min) + min;
console.log(randomDecimal(1.3,2.2))