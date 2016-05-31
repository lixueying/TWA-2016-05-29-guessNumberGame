var maxChanceCount = 6;
var count = 0;

var compare = require('../src/compareNumber');
var randomGenerator = require('../src/numberGenerator');
var userInput = require('../src/userGuess');
var input = require('../src/getUserInput');

var randomNumber = randomGenerator.numberGenerator();

var getCompareResult = function(input){
    var result = "";
    if(userInput.isValidateInput(input)){
        result += compare.compare(input, randomNumber);
    }else{
        result += "input is not validate!"
        count--;
    }
    return result;
}

var gameInit = function(){
    count = 0;
}

var getGameStatus = function(compareResult){
    var resultText = '';
    if (compareResult === '4A0B') {
        resultText += 'Congratulations!\n';
        gameInit();
    }
    count++;
    if (count >= maxChanceCount) {
        resultText += 'Fails!\n';
        gameInit();
    }
    return resultText;
}

var printResult = function(compareResult, statusResult){
    var result = "";
    result += compareResult + '\n';
    result += statusResult;
    return result;
}

var gameController = function(){
    console.log('please input 4 numbers(chance:'+(maxChanceCount - count)+'):')
    var compareResult = "";
    var statusResult = "";
    var result = "";
    var guessNumber = input.getUserInput();
    compareResult += getCompareResult(guessNumber);
    statusResult += getGameStatus(compareResult);

    result += printResult(compareResult, statusResult);

    if(statusResult === 'Fails!\n' || statusResult === 'Congratulations!\n'){
        console.log(result);
    }else{
        console.log(compareResult);
        gameController();
    }
}

module.exports = {
    gameController: gameController,
    getGameStatus: getGameStatus,
    gameInit, gameInit,
    getCompareResult, getCompareResult,
    printResult: printResult
}