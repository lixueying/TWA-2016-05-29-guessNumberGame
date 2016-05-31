describe('userGuess', function(){

    beforeEach(function () {
        userGuess = require('../src/userGuess');
    });

    it('should return false when user input not a number', function(){
        var flag = userGuess.isValidateInput("afrg");
        expect(flag).toBe(false);
    });

    it('should return true when user input is a number', function(){
        var flag = userGuess.isValidateInput("1234");
        expect(flag).toBe(true);
    });

    it('should return false when user input length more than 4', function(){
        var flag = userGuess.isValidateInput("12345678");
        expect(flag).toBe(false);
    });

    it('should return false when user input number is repeat', function(){
        var flag = userGuess.isValidateInput("1223");
        expect(flag).toBe(false);
    });

});