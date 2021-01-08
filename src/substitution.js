const subAlpha = "xzgbstiojufmrlqcvnkweyapdh";

function substitution(input, alphabet, encode = true) {
  try {
    if (typeof alphabet !== "string") throw `Alphabet must be a string.`; // Throw an error if alphabet is not a string
    if (typeof input !== "string") throw `Input must be a string.`; // Throw an error if input is not a string
    if (alphabet.length !== 26) throw false; // Throw an error if alphabet is not 26 characters
    const checkForRepeated = alphabet
      .toLowerCase()
      .split("")
      .sort()
      .join("")
      .match(/(.)\1+/g); // Check for duplicate characters
    if (checkForRepeated !== null)
      throw `Alphabet must not have duplicate letters.`; // If checkForRepeated is empty, throw an error
  } catch (error) {
    return error;
  }

  let Msg = ""; // Declare variable for encoded/decoded msg

  input = input.toLowerCase(); // Change all inputs to lowercase
  const alphabetArr = alphabet.split(""); // Split alphabet into an array
  const origAlpha = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]; // Declare array for actual alphabet
  let inputArr = input.split(""); // Split input into an array by letter
  let cypher = []; // Declare variable for cypher array of objects

  origAlpha.forEach((alpha, i) => cypher.push({ [alpha]: alphabetArr[i] })); // Create cypher (array of objects)

  if (encode === true && !/\s/.test(input)) {
    // If encode is true and there are no spaces in input
    input = input.replace(/[^a-zA-Z ]/g, ""); // Remove all special characters
    for (let inputInd = 0; inputInd < inputArr.length; inputInd++) {
      // Loop through inputArr
      for (let cypherInd = 0; cypherInd < cypher.length; cypherInd++) {
        // Loop through cypher
        let letter = inputArr[inputInd]; // Declare variable for inputArr index
        let key = Object.keys(cypher[cypherInd]).toString(); // Declare variable for cypher index's key made into a string
        let property = cypher[cypherInd][key]; // Declare variable for cypher index's property

        if (letter === key) Msg += property; // If letter = key add corresponding property to Msg
      }
    }
  } else if (encode === true && /\s/.test(input)) {
    // If encode is true and there are spaces in input
    input = input.replace(/[^a-zA-Z ]/g, "");
    let inputArr2 = input.split(" "); // Split string inside array into new array with one space in between each letter [[s,t,r,i,n,g], [s,t,r,i,n,g]]
    let msgArray = []; // Declare variable to push encoded values into
    inputArr2.forEach((element) => {
      // Loop through each element in array
      let encoded = []; // Declare variable to push each encoded string into
      for (let wordInd = 0; wordInd < element.length; wordInd++) {
        // Loop through each word
        for (let cypherInd = 0; cypherInd < cypher.length; cypherInd++) {
          // Loop through cypher

          let key = Object.keys(cypher[cypherInd]); // Declare variable for object key
          if (element[wordInd] == Object.keys(cypher[cypherInd]))
            encoded.push(cypher[cypherInd][key]); // If word index matches object key index, push corresponding property into encoded array
        }
      }
      msgArray.push(encoded); // Push each encoded array into msgArray
    });

    for (let arrInd = 0; arrInd < msgArray.length; arrInd++) {
      msgArray[arrInd] = msgArray[arrInd].join(""); // Loop through msgArray and join each element together into one word
    }
    Msg += msgArray.join(" "); // Join each element with a space and add to Msg
  }

  if (encode === false && !/\s/.test(input)) {
    // If encode is false and there are no spaces in input
    for (let inputInd = 0; inputInd < inputArr.length; inputInd++) {
      // Loop through inputArr
      for (let cypherInd = 0; cypherInd < cypher.length; cypherInd++) {
        // Loop through cypher
        let letter = inputArr[inputInd]; // Declare variable for inputArr index
        let key = Object.keys(cypher[cypherInd]).toString(); // Declare variable for cypher index's key made into a string
        let property = cypher[cypherInd][key]; // Declare variable for cypher index's property

        if (letter === property) Msg += key; // If letter = property add corresponding key to Msg
      }
    }
  } else if (encode === false && /\s/.test(input)) {
    let inputArr2 = input.split(" "); // Split string inside array into new array with one space in between each letter [[s,t,r,i,n,g], [s,t,r,i,n,g]]
    let msgArray = []; // Declare variable to push encoded values into
    inputArr2.forEach((element) => {
      // Loop through each element in array
      let encoded = []; // Declare variable to push each encoded string into
      for (let wordInd = 0; wordInd < element.length; wordInd++) {
        // Loop through each word
        for (let cypherInd = 0; cypherInd < cypher.length; cypherInd++) {
          // Loop through cypher

          let key = Object.keys(cypher[cypherInd]); // Declare variable for object key
          if (element[wordInd] == cypher[cypherInd][key])
            encoded.push(Object.keys(cypher[cypherInd])); // If word index matches object property index, push corresponding key into encoded array
        }
      }
      msgArray.push(encoded); // Push each encoded array into msgArray
    });

    for (let arrInd = 0; arrInd < msgArray.length; arrInd++) {
      msgArray[arrInd] = msgArray[arrInd].join(""); // Loop through msgArray and join each element together into one word
    }
    Msg += msgArray.join(" "); // Join each element with a space and add to Msg
  }

  return Msg;
}

module.exports = substitution;
