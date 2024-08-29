const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS"
    }

    let fibonacciArr = [0, 1, 1, 2, 3];

    for (let i = 0; i < parseInt(num); i ++) {
        let result = fibonacciArr[fibonacciArr.length - 1] + fibonacciArr[fibonacciArr.length - 2];
        let newArr = [fibonacciArr[fibonacciArr.length - 1], result];
        fibonacciArr.push(newArr[1]);
    }

    return fibonacciArr[parseInt(num)];
};


console.log(fibonacci("3"));
// Do not edit below this line
module.exports = fibonacci;
