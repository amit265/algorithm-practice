// 14. Check if Object is an Array or Not


// Using Array.isArray() Method

function checkObject() {
    const countries = ["India", "USA", "Canada"];
    const checkArrayObj = Array.isArray(countries);

    console.log(checkArrayObj);
}

checkObject();


//  Using instanceof Operator


const array1 = [1, 2, 3];
const notArray = { name: 'example' };
console.log(array1 instanceof Array);
console.log(notArray instanceof Array);