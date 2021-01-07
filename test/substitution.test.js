// Write your tests here!
const substitution = require('../src/substitution');
const expect = require("chai").expect;
// Write your tests here!


const subAlpha = 'xzgbstiojufmrlqcvnkweyapdh';

describe('substitution', () => {
    it('should be a function', () => {
        expect(substitution).to.be.a('function')
    })
    it('should throw an error if if alphabet is not a string', () => {
        const expected = `Alphabet must be a string.`
        const actual = substitution('Hello', ['a', 'b', 'c'])
        expect(expected).to.equal(actual)
    })
    it('should throw an error is input is not a string', () => {
        const expected = `Input must be a string.`
        const actual = substitution(['Hello'], subAlpha)
        expect(expected).to.equal(actual)
    })
    it(`should throw an error if alphabet doesn't have 26 characters`, () => {
        const expected = false
        const actual = substitution('Hello', 'xzg!bstiojufmrlqcvnkweyapdh')
        expect(expected).to.equal(actual)
    })
    it(`should throw an error is there are duplicate letters in alphabet`, () => {
        const expected = `Alphabet must not have duplicate letters.`;
        const actual = substitution('Hello', 'xzzbstiojufmrlqcvnkweyapdh');
        expect(expected).to.equal(actual)
    })
    it(`should return an encoded message when encode is true`, () => {
        const expected = 'xbnjxlls';
        const actual = substitution('Adrianne', subAlpha);
        expect(expected).to.equal(actual);
    })
    it(`it should decode inputted messages when encode is false`, () => {
        const expected = 'adrianne';
        const actual = substitution('xbnjxlls', subAlpha, false)
    })
    it(`should maintain spaces when encoding or decoding messages`, () => {
        const expected = 'oj xbnjxlls';
        const expected2 = 'hi adrianne';
        const actual = substitution('Hi Adrianne', subAlpha);
        const actual2 = substitution('oj xbnjxlls', subAlpha, false);

        expect(expected).to.equal(actual);
        expect(expected2).to.equal(actual2);
    })
})
