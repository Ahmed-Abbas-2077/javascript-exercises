const repeatString = function(arr, num) {
    let str = "";
    if (num < 0) {
        return "ERROR";
    }
    for (let i = 0; i < num; i++) {
        str += arr;
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
