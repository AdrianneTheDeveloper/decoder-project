function polybius(input, encode = true) {
    try {
        
        if (typeof input !== 'string') throw 'Input is not a string.' // If input is not a string throw an error

        const lengthCheck = input.replace(/ /g,'') // Remove whitespaces
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
        { '(i/j)': 42 },
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
                
            }
        } 

    } else if (encode === false && /\s/.test(input)) {
        input = input.split(' ').map((word) => {
            return [word]
        })

        
    }
    return input
}

console.log(polybius('3251131343 1141244211333351', false))
module.exports = polybius;
