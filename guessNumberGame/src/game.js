var chanceCount = 6;
var randomNumber = numberGenerator();
function gameStart(guessNumbers, randomNumber){
    var tip = "";
    for(chanceCount = 5; chanceCount >= 0; --chanceCount){
        var guessNumber = guessNumbers[chanceCount].toString();
        if(isValidateInput(guessNumber)){
            var result = compare(guessNumber, randomNumber);
            tip = printResult(result);
            if(tip === "Congratulations!"){
                tip = "Congratulations!";
                break;
            }else if (tip === "Game Over"){
                tip = "Game Over";
                break;
            }
        }else{
            break;
        }
    }
    return tip;
}

function printResult(result){
    var msg = "";
    if(result === "4A0B"){
        msg = msg + "Congratulations!";
    }else{
        if(chanceCount != 0){
            msg = msg + "Please input your number";
        }else{
            msg = msg + "Game Over";
        }
    }
    return msg;
}