const repeatString = function(string, num) {
    if (num == -1) return "ERROR"
    else if ( num == 0) return ''
    else if (num == 1 ) return string
    return string + repeatString(string, num - 1)
};

// Do not edit below this line
module.exports = repeatString;
