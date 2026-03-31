// 10. Find the Area of a Triangle

// when height is known

// area = base * height / 2
function triangleArea(base, height){
    return 0.5*base*height.toFixed(2);
}

console.log(triangleArea(45, 3))



// when all sides are known

function triangleAreaWithSides(s1, s2, s3){
    let s = (s1 + s2 + s3)/2;
    return Math.sqrt(s*((s - s1) * (s - s2) * (s - s3)));

}

console.log(triangleAreaWithSides(3,4,5))