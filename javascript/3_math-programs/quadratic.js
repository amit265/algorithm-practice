// 3. Solve Quadratic Equations

// ax2 + bx + c = 0
function quadratic (a,b,c){
    if(a === 0) return "not quadratic"
    let roots = [];
    let d = b * b - 4 * a *c;
    let sqrt_val = Math.sqrt(Math.abs(d));
    if(d >= 0){
        roots = [...roots, ((-b + sqrt_val)/2*a).toFixed(2), ((-b - sqrt_val)/2*a).toFixed(2)];
    } else {
        return "roots are not real"
    }

    return new Set(roots);
}


console.log(quadratic(4,-100,104))