const getTheTitles = function(books) {
    let titleArr = []
    for ( book of books ) titleArr.push(book.title)
    return titleArr
};

// Do not edit below this line
module.exports = getTheTitles;
