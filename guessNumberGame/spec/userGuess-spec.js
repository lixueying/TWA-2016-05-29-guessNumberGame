describe('userGuess', function(){
    it('should return false when user input not a number', function(){
        var flag = isValidateInput("afrg");
        expect(flag).toBe(false);
    });

    it('should return ture when user input is a number', function(){
        var flag = isValidateInput("1234");
        expect(flag).toBe(true);
    });

    it('should return false when user input length more than 4', function(){
        var flag = isValidateInput("12345678");
        expect(flag).toBe(false);
    });

    it('should return false when user input number is repeat', function(){
        var flag = isValidateInput("1223");
        expect(flag).toBe(false);
    });

});