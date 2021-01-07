// Write your tests here!
const caesar = require('../src/caesar');
const expect = require("chai").expect;

// Write your tests here!

describe('caesar', () => {
    it('should be a function', () => {
        expect(caesar).to.be.a('function')
    })
    it('should only accept a string for the input arg', () => {
        const expected = 'Input a,b,c is not a string.'
    const actual = caesar(['a', 'b', 'c'], 3)
    expect(expected).to.equal(actual)
    })
    it('should return false if shift is equal to 0, < -25, or > 25', () => {
        const actual = caesar('Hello', 0);
        const actual2 = caesar('Hello', -36);
        const actual3 = caesar('Hello', 26);
        expect(actual, actual2, actual3).to.be.false
    })
    it('should return an encoded msg if encode arg is blank or true', () => {
        const expected = 'khoor';
        const actual = caesar('Hello', 3, true)
        expect(expected).to.equal(actual)
    })
    it('should maintain spaces if input has spaces', () => {
        const expected = 'khoor dguldqqh';
        const actual = caesar('Hello Adrianne', 3)
        expect(expected).to.equal(actual)
    })
    it('should remove special characters from input', () => {
        const expected = 'khoor dguldqqh';
        const actual = caesar('Hello Adrianne!', 3)
        expect(expected).to.equal(actual)
    }) 
    it('should return a decoded msg when encode arg is false', () => {
        const expected = 'hello adrianne';
        const actual = caesar('ebiil xaofxkkb', -3, false)
        expect(expected).to.equal(actual)
    })
})