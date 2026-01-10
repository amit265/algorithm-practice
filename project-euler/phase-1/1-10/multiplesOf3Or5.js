function multiplesOf3Or5(number) {
    let list = [];
    for(let i = 3; i < number; i++){
        if(i % 3 === 0 || i % 5 === 0){
            list.push(i);
        }
    }
    const sum = list.reduce((ac, cr) => ac + cr, 0);
    return sum;
}

console.log(multiplesOf3Or5(10)) // 23