function polybius(input, encode = true) {
    try {
        
        if (typeof input !== 'string') throw 'Input is not a string.' // If input is not a string throw an error

        const lengthCheck = input.replace(/ /g, '') // Remove whitespaces
        if (encode === false && lengthCheck.length % 2 !== 0) throw 'Input must be even.' // If encode is false and length of string without spaces isn't even throw and error
    }
    catch (error) {
        return error
    }
    
    const grid = [
        { a: 11 },
        { b: 21 },
        { c: 31 },
        { d: 41 },
        { e: 51 },
        { f: 12 },
        { g: 22 },
        { h: 32 },
        { i: 42 },
        { j: 42 },
        { k: 52 },
        { l: 13 },
        { m: 23 },
        { n: 33 },
        { o: 43 },
        { p: 53 },
        { q: 14 },
        { r: 24 },
        { s: 34 },
        { t: 44 },
        { u: 54 },
        { v: 15 },
        { w: 25 },
        { x: 35 },
        { y: 45 },
        { z: 55 }
    ]
    input = input.toLowerCase(); // Set all strings to lowercase to ignore capitols.
    let msg = '' // Declare variable for encoded/decoded string
    if (encode === true) { // If encode is true
        for (let inputInd = 0; inputInd < input.length; inputInd++) { // Loop through input
            for (let gridInd = 0; gridInd < grid.length; gridInd++) { // Loop through grid while looping through input
                let inputLetter = input[inputInd] // Declare variable for input index
                let key = Object.keys(grid[gridInd]); // Declare variable for grid index's key
                let property = grid[gridInd][key]; // Declare variable for grid index's property
                if (inputLetter == key) input = input.replace(inputLetter, property) // If inputLetter == key replace the input letter with corresponding property.
                msg = input // Assign input to msg variable
            }
        }
    }
    if (encode === false && !/\s/.test(input)) { // If encode is false and there are no spaces in input
        input = input.match(/.{1,2}/g) // Separate input by every two characters and create a new array
        for (let inputInd = 0; inputInd < input.length; inputInd++) { // Loop through array
            for (let gridInd = 0; gridInd < grid.length; gridInd++) { // Loop through grid while looping through array
                let inputNumber = input[inputInd] // Declare variable for array index
                let key = Object.keys(grid[gridInd]);
                let property = grid[gridInd][key];
                
                if (inputNumber == property) msg += key // If array index == property add corresponding key to msg variable
                msg = msg.replace('ij', '(i/j)') // Replace every 'ij' with '(i/j)' to show distinction
            }
        }

    } else if (encode === false && /\s/.test(input)) { // If encode is false and there are spaces in the string
        input = input.split(' ').map((word) => { // Split the string up by one space into an array and map out a new array with each 'word' being in it's own array.
            return [word]
        })

       let toDecode = [] // Declare an array to push separated words into
        input.forEach(element => { // For each element in input array, loop each element and push the index in each element into toDecode array with indexes separated by 2.
            element.forEach(word => {
                toDecode.push(word.match(/.{1,2}/g))
            })
        });

        for (let decodeInd = 0; decodeInd < toDecode.length; decodeInd++) { // Loop toDecode array
            for (let wordInd = 0; wordInd < toDecode[decodeInd].length; wordInd++) { // Loop arrays within toDecode
                for (let gridInd = 0; gridInd < grid.length; gridInd++) { // Loop grid
                    let key = Object.keys(grid[gridInd]); // Declare key variable
                    let property = grid[gridInd][key]; // Declare property variable
                    let word = toDecode[decodeInd]; // Declare variable for arrays inside toDecode
                    let letter = word[wordInd] // Declare variable for values inside word array
                    if (property == letter) word.splice(wordInd, 1, key) // If property matches letter replaces index value with key
                
                }
            }
        } 
        
        for (let decodeInd = 0; decodeInd < toDecode.length; decodeInd++) { // Loop toDecode
            toDecode[decodeInd] = toDecode[decodeInd].join('') // Join each array within toDecode

        }
        for (let decodeInd = 0; decodeInd < toDecode.length; decodeInd++) {
            if (toDecode[decodeInd].includes('i') || toDecode[decodeInd].includes('j')) {
                toDecode[decodeInd] = toDecode[decodeInd].replace('j', '(i/j)');
                toDecode[decodeInd] = toDecode[decodeInd].replace('i', '(i/j)')
            }
        }
       
        msg = toDecode.join(' ') // Join strings inside toDecode with a space and assign joined string to msg
       // if (msg.includes('j')) msg = msg.replace('j', '(i/j)') // If string includes i or j replace it with (i/j)'
        //if (msg.includes('i')) msg = msg.replace('i', '(i/j)')
    }
    return msg // Return msg in any scenario
}

module.exports = polybius;
