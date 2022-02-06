const removeFromArray = function(arr, ...args) {
    let argSet = new Set(args)
    let newArr = []
    for(let x of arr){
        if (!argSet.has(x))
            newArr.push(x)
    }
    return newArr
};

// Do not edit below this line
module.exports = removeFromArray;
