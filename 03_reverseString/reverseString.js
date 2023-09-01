const reverseString = function(arr) {
    let str = '';
    for (let i = arr.length - 1; i >= 0; i--) {
        str += arr[i];
    }
    return str;
};

// Do not edit below this line
module.exports = reverseString;
