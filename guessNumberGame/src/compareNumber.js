var compare = function(guessNumber, randomNumber){
    var aCount = 0;
    var allContainedCount = 0;
    var result = "";
    for(var index = 0; index < randomNumber.length; index++){
        if(randomNumber.charAt(index) === guessNumber.charAt(index)){
            aCount++;
        }
        if(guessNumber.indexOf(randomNumber.charAt(index)) != -1){
            allContainedCount++;
        }
    }
    result = result + aCount+"A"+(allContainedCount-aCount)+"B";
    return result;
}


module.exports = {
    compare: compare
}