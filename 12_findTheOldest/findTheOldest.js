const findTheOldest = function(arr) {
    const TODAYS_YEAR = 2024;

    arr.map((person) => {
        if (!person.yearOfDeath) {
            person.age = TODAYS_YEAR - person.yearOfBirth;
        } else {
            person.age = person.yearOfDeath - person.yearOfBirth;
        }
    })
    
    arr.sort((a, b) => b.age - a.age);
    

    return arr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
