let memo = [0, 1]


const fibonacci = function(num) {
    let n = +num
    if ( n < -1 ) return 'OOPS'
    if(memo[+n] !== undefined) {
        return memo[+n]
    }
    else {
        let fibn = fibonacci(n - 1) + fibonacci(n - 2)
        memo[+n] = fibn
        return +fibn
    }
};

// Do not edit below this line
module.exports = fibonacci;
