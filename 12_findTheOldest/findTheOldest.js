const findTheOldest = function(people) {
    let oldestAge = 0 
    let oldestperson 
    let age
    let now = new Date()

    let nowYear = now.getFullYear()
    for ( p of people) {
       age = "yearOfDeath" in p ? p.yearOfDeath - p.yearOfBirth : nowYear - p.yearOfBirth
       if (age > oldestAge ) {
           oldestAge = age
             oldestperson = p
        }
    }
    return oldestperson
};  

// Do not edit below this line
module.exports = findTheOldest;
