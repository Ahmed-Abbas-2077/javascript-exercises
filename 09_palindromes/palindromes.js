const palindromes = function (string) {
    // Remove all non-alphanumeric characters
    let alphanumeric = string.replace(/[^a-z0-9]/gi, '').toLowerCase();
    // Reverse the string
    let reversed = alphanumeric.split('').reverse().join('');
    // Compare the two strings
    return alphanumeric === reversed;
};

// Do not edit below this line
module.exports = palindromes;
