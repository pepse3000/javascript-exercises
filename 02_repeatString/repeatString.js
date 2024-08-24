const repeatString = function(string, number) {
    if (number < 0) {
        return 'ERROR'
    }

    fullString = ""

    for (let i = 0; i < number; i++) {
        fullString += string
    }

    return fullString
};

// Do not edit below this line
module.exports = repeatString;
