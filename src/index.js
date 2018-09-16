module.exports = function solveEquation(equation) {
    // -478 * x^2 + 3021138772 * x - 4052495536885632       ax^2 + bx + c    d = b^2 - 4ac
    
    let a = +equation.split(' * x^2')[0];

    let splittedStr = equation.split(' * x');

    let _b = splittedStr[1];
    let b = +(_b.substring(3, 4) + _b.substring(5));
    
    let _c = splittedStr[2];
    let c = +(_c.substring(1, 2) + _c.substring(3));

    let d = b * b - 4 * a * c;

    let x1 = Math.round((-b + Math.sqrt(d)) / (2 * a));
    let x2 = Math.round((-b - Math.sqrt(d)) / (2 * a));

    if (x1 > x2) {
        return [x2, x1];
    } else {
        return [x1, x2];
    }
}


