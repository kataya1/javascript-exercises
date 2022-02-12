// const findTheOldest = function(people) {
//     let oldestAge = 0 
//     let oldestperson 
//     let age
//     let now = new Date()

//     let nowYear = now.getFullYear()
//     for ( p of people) {
//        age = "yearOfDeath" in p ? p.yearOfDeath - p.yearOfBirth : nowYear - p.yearOfBirth
//        if (age > oldestAge ) {
//            oldestAge = age
//              oldestperson = p
//         }
//     }
//     return oldestperson
// };  
const findTheOldest = function (people){
    return people.reduce( (oldest, person) => {
        return (person.yearOfDeath ?? new Date().getFullYear()) - person.yearOfBirth >
         (oldest.yearOfDeath ?? new Date().getFullYear()) - oldest.yearOfBirth?
            person: oldest
    } , {yearOfBirth: 0, yearOfDeath: 0})
}
// Do not edit below this line
module.exports = findTheOldest;
