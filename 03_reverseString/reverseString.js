const reverseString = function(string ) {
    let arr = []
    for ( let i = string.length - 1; i >= 0; i-- ) arr.push(string[i])
    return arr.join('')
};

// Do not edit below this line
module.exports = reverseString;
