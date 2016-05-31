describe('numberGenerator', function(){

    beforeEach(function () {
        numberGenerator = require('../src/numberGenerator');
    });

    it('should return a 4 length of number', function(){
        var randomNumber = numberGenerator.numberGenerator();
        expect(randomNumber.length).toEqual(4);
    });

    it('should return four different number', function(){

        var randomNumber = numberGenerator.numberGenerator();
        var flag = true;

        if (randomNumber[0] !== randomNumber[1] && randomNumber[0] !== randomNumber[2] &&
           randomNumber[0] !== randomNumber[3] && randomNumber[1] !== randomNumber[2] &&
           randomNumber[1] !== randomNumber[3] && randomNumber[2] !== randomNumber[3]){
           flag = true;
        }else{
            flag = false;
        }
        expect(flag).toBe(true);
    });

    it('the number is random',function() {

        var generate1 = numberGenerator.numberGenerator();
        var generate2 = numberGenerator.numberGenerator();

        expect(generate1 !== generate2).toBe(true);
    });
});