const palindromes = function (str) {
    const symbolsToRemove = [" ", ".", ",", "!"];
    let editedStr = str
        .toLowerCase()
        .split("")
        .filter(elem => !symbolsToRemove.includes(elem));

    return editedStr.join("") == editedStr.reverse().join("");
};

console.log(palindromes("A car, a man, a maraca."));

// Do not edit below this line

module.exports = palindromes;
