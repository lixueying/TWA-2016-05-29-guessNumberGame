describe('compareNumber', function(){

    beforeEach(function () {
        compare = require('../src/compareNumber');
    });

    it('should return 0A0B when compare 1234 and 5678', function(){
        var result = "";
        result = compare.compare("1234", "5678");
        expect(result).toBe("0A0B");
    });

    it('should return 4A0B when compare 9876 and 9876', function(){
        var result = "";
        result = compare.compare("9876", "9876");
        expect(result).toBe("4A0B");
    });

    it('should return 0A4B when compare 1234 and 4321', function(){
        var result = "";
        result = compare.compare("1234", "4321");
        expect(result).toBe("0A4B");
    });

    it('should return 2A2B when compare 1234 and 1324', function(){
        var result = "";
        result = compare.compare("1234", "1324");
        expect(result).toBe("2A2B");
    });

});