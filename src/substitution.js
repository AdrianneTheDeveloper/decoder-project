function substitution(input, alphabet, encode = true) {}

const subAlpha = 'xzgbstiojufmrlqcvnkweyapdh';
const alphaArr = ['a', 'b', 'c'];

function substitution(input, alphabet, encode = true) {

    try {
        if (typeof alphabet !== 'string') throw `${alphabet} is not a string.`
        if (typeof input !== 'string') throw `${input} is not a string.`
    }
    catch (error) {
        return `Error: ${error}`
    }


    input = input.toLowerCase();
    const alphabetArr = alphabet.split("");
    const origAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let inputArr = input.split('');
    let cypher = [];
    
    origAlpha.forEach((alpha, i) => cypher.push({ [alpha]: alphabetArr[i] }));
    //inputArr = inputArr.map((string) => [string]);


    let matchingValues = [];
    for (let i = 0; i < inputArr.length; i++) {
        for (let j = 0; j < cypher.length; j++) {
            if (cypher[j].hasOwnProperty(inputArr[i]))
                matchingValues.push(cypher[j])
        }
    } 

    let encodedMsg = '';
    matchingValues.forEach((obj, i) => {
        for (let key in obj) {
            encodedMsg += obj[key];
        }
    })
    
    return encodedMsg
}
console.log(substitution('Adrianne', subAlpha))
module.exports = substitution;
