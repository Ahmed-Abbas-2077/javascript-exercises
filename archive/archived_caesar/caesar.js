const caesar = function(string, shiftFactor) {
    let result = '';
    for(i = string.length - 1; i >= 0; i--) {
        let char = string[i];
        let charCode = char.charCodeAt(0);
        if (charCode >= 65 && charCode <= 90) {
            char = String.fromCharCode(((charCode - 65 + shiftFactor) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            char = String.fromCharCode(((charCode - 97 + shiftFactor) % 26) + 97);
        }
        result = char + result;
    }
};

// Do not edit below this line
module.exports = caesar;
