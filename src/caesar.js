function caesar(input, shift, encode = true) {
  try {
    if (typeof input !== "string") throw `Input ${input} is not a string.`;
    if (shift === 0 || shift < -25 || shift > 25) throw false;
  } catch (err) {
    return err;
  }

  input = input.toLowerCase().replace(/[^a-zA-Z ]/g, "");

  let Msg = "";

  if (!/\s/.test(input) && encode === true) {
    for (let inputInd = 0; inputInd < input.length; inputInd++) {
      let charCode = input.charCodeAt(inputInd) + shift;
      if (charCode < 97) charCode += 26;
      if (charCode > 122) charCode -= 26;
      Msg += String.fromCharCode(charCode);
    }
  } else if (/\s/.test(input) && encode === true) {
    input = input.split(" ");
    input = input.map((word) => {
      return word.split("");
    });

    for (let inputInd = 0; inputInd < input.length; inputInd++) {
      for (let inputLev2 = 0; inputLev2 < input[inputInd].length; inputLev2++) {
        for (
          let inputLev3 = 0;
          inputLev3 < input[inputInd][inputLev2].length;
          inputLev3++
        ) {
          let charCode =
            input[inputInd][inputLev2].charCodeAt(inputLev3) + shift;

          if (charCode < 97) charCode += 26;
          if (charCode > 122) charCode -= 26;
          input[inputInd][inputLev2] = String.fromCharCode(charCode);
        }
      }
    }
    for (let inputInd = 0; inputInd < input.length; inputInd++) {
      input[inputInd] = input[inputInd].join("");
    }
    Msg = input.join(" ");
  }

  if (!/\s/.test(input) && encode === false) {
    for (let inputInd = 0; inputInd < input.length; inputInd++) {
      let charCode = input.charCodeAt(inputInd) - shift;
      if (charCode < 97) charCode += 26;
      if (charCode > 122) charCode -= 26;
      Msg += String.fromCharCode(charCode);
    }
  } else if (/\s/.test(input) && encode === false) {
    input = input.split(" ");
    input = input.map((word) => {
      return word.split("");
    });

    for (let inputInd = 0; inputInd < input.length; inputInd++) {
      for (let inputLev2 = 0; inputLev2 < input[inputInd].length; inputLev2++) {
        for (
          let inputLev3 = 0;
          inputLev3 < input[inputInd][inputLev2].length;
          inputLev3++
        ) {
          let charCode =
            input[inputInd][inputLev2].charCodeAt(inputLev3) - shift;

          if (charCode < 97) charCode += 26;
          if (charCode > 122) charCode -= 26;
          input[inputInd][inputLev2] = String.fromCharCode(charCode);
        }
      }
    }
    for (let inputInd = 0; inputInd < input.length; inputInd++) {
      input[inputInd] = input[inputInd].join("");
    }
    Msg = input.join(" ");
  }
  return Msg;
}



module.exports = caesar;
