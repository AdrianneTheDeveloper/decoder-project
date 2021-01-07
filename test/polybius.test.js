const polybius = require('../src/polybius');
const expect = require("chai").expect;

// Write your tests here!
describe('polybius', () => {
    it('should be a function', () => {
        expect(polybius).to.be.a('function')
    })
    it('should only accept strings as an input', () => {
        const expected = 'Input is not a string.';
        const actual = polybius(['a']);
        expect(expected).to.equal(actual)
    })
    it('should only accept an input with an even length when encode is false', () => {
        const expected = 'Input must be even.';
        const actual = polybius('12 3', false);
        expect(expected).to.equal(actual)
    })
    it('should return an encoded message when encode is true', () => {
        const expected = '3251131343 1141244211333351';
        const actual = polybius('Hello Adrianne');
        expect(expected).to.equal(actual)
    })
    it('should always return a string', () => {
        const actual = polybius('Hello Adrianne');
        expect(actual).to.be.a('string');
    })
    
})
