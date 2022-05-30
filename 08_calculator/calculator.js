const add = function(x, y) {
    return x + y;
};

const subtract = function(x, y) {
    return x - y;
};

const sum = function(array) {
    return array.reduce(function(a, b) {
        return a + b;
    }, 0);

};

const multiply = function(numbers) {

    let product = numbers.reduce((a, b) => {
        return a * b;
    });

    return product;

};

const power = function(base, exponent) {
    return Math.pow(base, exponent);

};

const factorial = function(n) {
    let answer = 1;
    if (n == 0 || n == 1) {
        return answer;
    } else {
        for (let i = n; i >= 1; i--) {
            answer = answer * i;
        }
        return answer;
    }

};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
};