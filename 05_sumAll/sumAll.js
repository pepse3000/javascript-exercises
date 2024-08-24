const sumAll = function(a, b) {
    let sum = 0;

    if (typeof a !== "number" || typeof b !== "number") return "ERROR";

    if (Number.isInteger(a) == false || Number.isInteger(b) == false) return "ERROR";

    if (a < 0 || b < 0) return "ERROR";

    if (a > b) {
        let temp = a;
        a = b;
        b = temp;
    }

    for (let i = a; i <= b; i++) {
        sum += i;
    }

    return sum;
};

console.log(sumAll(123, 2.5));

// Do not edit below this line
module.exports = sumAll;
