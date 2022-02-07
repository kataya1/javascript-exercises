const dispalceLetter = (letter, d) => String.fromCharCode(((letter.charCodeAt(0) - 'a'.charCodeAt(0) + d) % 26) + 'a'.charCodeAt(0))
const caesar = function(string, d) {
    if ( d < 0) d = 26 + ( d % 26 )
    let arr = []
    for( let i = 0; i < string.length; i++){
        let l = string[i]
        if( l.charCodeAt(0) >= 97 && l.charCodeAt(0) <= 122)
            arr.push(dispalceLetter(l, d))
        
        else if(l.charCodeAt(0) >= 65 && l.charCodeAt(0) <= 90)
            arr.push(dispalceLetter(l.toLowerCase(), d).toUpperCase())
        else
            arr.push(l)
    }
    return arr.join('')
};
console.log(caesar('A', 1))  //B

// Do not edit below this line
module.exports = caesar;
