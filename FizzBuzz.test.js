const {getFizzBuzz} = require('./FizzBuzz');

describe('FizzBuzz', () => {

    it('should get the first number 1', () => {
        const results = getFizzBuzz();
        expect(results[0]).toEqual(1);
    });

    it('should get the second number 2', () => {
        const results = getFizzBuzz();
        expect(results[1]).toEqual(2);
    });
    
    it('should get the third number Fizz', () => {
        const results = getFizzBuzz();
        expect(results[2]).toEqual("Fizz");
    });

    it('should get the fourth number 4', () => {
        const results = getFizzBuzz();
        expect(results[3]).toEqual(4);
    });

    it('should get the fifth number 5', () => {
        const results = getFizzBuzz();
        expect(results[4]).toEqual('Buzz');
    });

    it('should get the sixth number Fizz', () => {
        const results = getFizzBuzz();
        expect(results[5]).toEqual('Fizz');
    });
    
    it('should get the fifteenth number FizzBuzz', () => {
        const results = getFizzBuzz();
        expect(results[14]).toEqual('FizzBuzz');
    });

    it('should get 100 items', () => {
        const results = getFizzBuzz();
        expect(results.length).toEqual(100);
    });

});
