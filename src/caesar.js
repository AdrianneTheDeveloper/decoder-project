function caesar(input, shift, encode = true) {
    try {
        if (typeof input !== "string") throw `Input ${input} is not a string.`;
        if (shift === 0 || shift < -25 || shift > 25) throw false;
    } catch (err) {
        return err;
    }

    input = input.toLowerCase().replace(/[^a-zA-Z ]/g, "");
    
    let Msg = ''
    
    

    if (!/\s/.test(input) && encode === true) {
        for (let i = 0; i < input.length; i++) {
            let charCode = input.charCodeAt(i) + shift;
            if (charCode < 97) charCode += 26;
            if (charCode > 122) charCode -= 26;
            Msg += String.fromCharCode(charCode);
        }
    } else if (/\s/.test(input) && encode === true){
        input = input.split(" ");
        input = input.map((word) => {
           return word.split('')
        })
        
        for (let i = 0; i < input.length; i++) {
            for (let k = 0; k < input[i].length; k++) {
                for (let j = 0; j < input[i][k].length; j++) {
                    let charCode = input[i][k].charCodeAt(j) + shift;

                    if (charCode < 97) charCode += 26;
                    if (charCode > 122) charCode -= 26;
                    input[i][k] = String.fromCharCode(charCode)
                }
            }
        }
        for (let i = 0; i < input.length; i++) {
            input[i] = input[i].join('')
        }
        Msg = input.join(' ')
    }
    
    if (!/\s/.test(input) && encode === false) {
        for (let i = 0; i < input.length; i++) {
            let charCode = input.charCodeAt(i) - shift;
            if (charCode < 97) charCode += 26;
            if (charCode > 122) charCode -= 26;
            Msg += String.fromCharCode(charCode);
        }
    } else if (/\s/.test(input) && encode === false){
        input = input.split(" ");
        input = input.map((word) => {
           return word.split('')
        })
        
        for (let i = 0; i < input.length; i++) {
            for (let k = 0; k < input[i].length; k++) {
                for (let j = 0; j < input[i][k].length; j++) {
                    let charCode = input[i][k].charCodeAt(j) - shift;

                    if (charCode < 97) charCode += 26;
                    if (charCode > 122) charCode -= 26;
                    input[i][k] = String.fromCharCode(charCode)
                }
            }
        }
        for (let i = 0; i < input.length; i++) {
            input[i] = input[i].join('')
        }
        Msg = input.join(' ')
    }
    return Msg
}
    

console.log(caesar("ebiil xaofxkkb!", -3, false));

module.exports = caesar;
