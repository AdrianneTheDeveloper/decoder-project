function caesar(input, shift, encode = true) {
    try { // Error handling
        if (typeof input !== "string") throw `Input ${input} is not a string.`;
        if (shift === 0 || shift < -25 || shift > 25) throw false;
      } catch (err) {
        return err;
      }
    
      input = input.toLowerCase().replace(/[^a-zA-Z ]/g, ""); // Makes input lowercase and removes any special characters.
    
      let Msg = ""; // Declares a variable for decoded/encoded message.
    
      if (!/\s/.test(input) && encode === true) { // If there is no spaces and encode is true
        for (let inputInd = 0; inputInd < input.length; inputInd++) { // Loop through input string 
          let charCode = input.charCodeAt(inputInd) + shift; // Declare a variable for the character code at the character index added to the shift
          if (charCode < 97) charCode += 26;
          if (charCode > 122) charCode -= 26;
          Msg += String.fromCharCode(charCode); // Convert character index to corresponding string and add it to the Msg variable
        }
      } else if (/\s/.test(input) && encode === true) { // If there is spaces in the string and encode is true
        input = input.split(" "); // Split the string up into an array separating the words
        input = input.map((word) => { // Map a new array splitting the words into an array with each character being an index
          return word.split("");
        });
    
        for (let inputInd = 0; inputInd < input.length; inputInd++) { // Loop through input array
          for (let inputLev2 = 0; inputLev2 < input[inputInd].length; inputLev2++) { // Loop through arrays within input array
            for ( // Loop through individual indexes within array inside input array
              let inputLev3 = 0;
              inputLev3 < input[inputInd][inputLev2].length;
              inputLev3++
            ) { // Declare variable for character code for individual index value plus the shift
              let charCode =
                input[inputInd][inputLev2].charCodeAt(inputLev3) + shift;
    
              if (charCode < 97) charCode += 26; // If charCode ends up going past lowercase alphabet, wrap it back around by adding 26 (# of letters)
              if (charCode > 122) charCode -= 26;
              input[inputInd][inputLev2] = String.fromCharCode(charCode); // Replace string in specific index position with converted string based on charCode variable
            }
          }
        }
        for (let inputInd = 0; inputInd < input.length; inputInd++) { // Loop through newly converted variable
          input[inputInd] = input[inputInd].join(""); // Join each index into one word
        }
        Msg = input.join(" "); // Finally join each word with a space and assign it to Msg variable
      }
    
      if (!/\s/.test(input) && encode === false) { // If there are no spaces in input and encode is false
        for (let inputInd = 0; inputInd < input.length; inputInd++) { // Loop through input
          let charCode = input.charCodeAt(inputInd) - shift; // Declare a variable for the character code at the character index subtracted to the shift
          if (charCode < 97) charCode += 26; // If charCode goes outside of alphabet range, add or subtract 26 respectively to wrap it back around
          if (charCode > 122) charCode -= 26;
          Msg += String.fromCharCode(charCode); // Convert each charCode to a string and add it to Msg variable
        }
      } else if (/\s/.test(input) && encode === false) { //If there is spaces in the string and encode is true
        input = input.split(" "); // Split the string up into an array separating the words
        input = input.map((word) => { // Map a new array splitting the words into an array with each character being an index
          return word.split("");
        });
    
        for (let inputInd = 0; inputInd < input.length; inputInd++) { // Loop through input array
          for (let inputLev2 = 0; inputLev2 < input[inputInd].length; inputLev2++) { // Loop through arrays within input array
            for ( // Loop through individual indexes within array inside input array
              let inputLev3 = 0;
              inputLev3 < input[inputInd][inputLev2].length;
              inputLev3++
            ) {
              let charCode = // Declare variable for character code for individual index value plus the shift
                input[inputInd][inputLev2].charCodeAt(inputLev3) - shift;
    
              if (charCode < 97) charCode += 26; // If charCode ends up going past lowercase alphabet, wrap it back around by adding 26 (# of letters)
              if (charCode > 122) charCode -= 26;
              input[inputInd][inputLev2] = String.fromCharCode(charCode); // Replace string in specific index position with converted string based on charCode variable
            }
          }
        }
        for (let inputInd = 0; inputInd < input.length; inputInd++) { // Loop through newly converted variable
          input[inputInd] = input[inputInd].join(""); // Join each index into one word
        }
        Msg = input.join(" "); // Finally join each word with a space and assign it to Msg variable
      }
      return Msg;
    }


module.exports = caesar;
