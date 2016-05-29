describe('numberGenerator', function(){
    it('should return a 4 length of number', function(){
        var randomNumber = numberGenerator();
        expect(randomNumber.length).toEqual(4);
    });

    it('should return four different number', function(){

        var randomNumber = numberGenerator();
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

        var generate1 = numberGenerator();
        var generate2 = numberGenerator();

        expect(generate1 !== generate2).toBe(true);
    });
});