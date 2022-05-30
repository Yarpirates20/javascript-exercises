const sumAll = function(startNumber, endNumber) {
    let sum = 0;

    if ((startNumber || endNumber) < 0) {
        return 'ERROR';
    } else if (typeof startNumber != 'number' || typeof endNumber != 'number') {
        return 'ERROR';
    } else if (startNumber < endNumber) {
        for (let i = startNumber; i <= endNumber; i++) {
            sum += i;
        }
    } else if (endNumber < startNumber) {
        for (let i = endNumber; i <= startNumber; i++) {
            sum += i;
        }
    }

    return sum;



}


// Do not edit below this line
module.exports = sumAll;