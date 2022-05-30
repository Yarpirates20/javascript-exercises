const ftoc = function(tempFarenheit) {

    let celsius = (tempFarenheit - 32) * (5 / 9);

    return Number.parseFloat(celsius.toFixed(1));

};

const ctof = function(tempCelsius) {

    let farenheit = (tempCelsius * (9 / 5)) + 32;

    return Number.parseFloat(farenheit.toFixed(1));

};

// Do not edit below this line
module.exports = {
    ftoc,
    ctof
};