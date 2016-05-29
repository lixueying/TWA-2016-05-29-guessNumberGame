describe('game', function(){
    beforeEach(function(){
        guessNumbers = [1234, 2345, 3456, 4312, 5421, 9876];
    });

    it('should return Game Over when randomNumber is 4321', function(){
        var result = gameStart(guessNumbers, "4321");
        expect(result).toBe("Game Over");
    });

    it('should return Congratulations! when randomNumber is 9876', function(){
        var result = gameStart(guessNumbers, "9876");
        expect(result).toBe("Congratulations!");
    });

});