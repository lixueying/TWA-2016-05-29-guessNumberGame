const readLine = require('readline-sync');

var getUserInput = function() {
    var input = readLine.question();
    return input;
};

module.exports = {
    getUserInput : getUserInput
};