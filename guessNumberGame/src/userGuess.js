function isValidateInput(guessNumber){
    if (guessNumber.length !== 4) {
        return false;
    }

    for (var index = 0; index < guessNumber.length; index++) {
        if(isNaN(guessNumber[index])){
            return false;
        }
        if (guessNumber.indexOf(guessNumber.charAt(index)) !== guessNumber.lastIndexOf(guessNumber.charAt(index))) {
            return false;
        }
    }
    return true;
}