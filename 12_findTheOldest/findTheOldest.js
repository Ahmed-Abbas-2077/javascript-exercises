const findTheOldest = function(array) {
    // get age of first person and then compare to the rest
    let oldest = array[0];
    for (let i = 1; i < array.length; i++) {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(array[i].yearOfBirth, array[i].yearOfDeath);
        if (currentAge > oldestAge) {
            oldest = array[i];
        }
    }
    return oldest;
};

function getAge(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
