const findTheOldest = function(arr) {
    let oldest = 0;
    return arr.reduce((tmp, person) =>{
        let birth = person.yearOfBirth;
        let death = person.yearOfDeath;
        if (death == undefined){
            death = (new Date()).getFullYear();
        }
        let age = death - birth;
        if (age > oldest){
            oldest = age;
            tmp = person;
        }
        return tmp;
    },{})

};

// Do not edit below this line
module.exports = findTheOldest;
