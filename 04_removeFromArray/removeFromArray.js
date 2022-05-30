const removeFromArray = function(firstArray, ...removedItems) {

    let modifiedArray = [...firstArray];
    for (let i = 0; i < removedItems.length; i++) {
        if (modifiedArray.includes(removedItems[i])) {
            modifiedArray.splice(modifiedArray.indexOf(removedItems[i]), 1);
        }
    }
    return modifiedArray;

};

// Do not edit below this line
module.exports = removeFromArray;