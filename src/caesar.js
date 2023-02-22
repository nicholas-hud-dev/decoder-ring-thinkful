// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
 

  function caesar(input, shift, encode = true) {
    // ensure that all characters in the given input message are lowercase
    input = input.toLowerCase()

    // if there is no shift argument given, or if the shift value is 
    // less than -25 or greater than 25, the function should return false
    if (!shift || shift < -25 || shift > 25) return false

    // declare a result variable containing an empty string, 
    // to be added to and returned later in the function
    let result = ""

    // declare an alphabet variable as a string, and use the split
    // method to divide the string into an array of 26 substrings
    let alpha = "abcdefghijklmnopqrstuvwxyz".split("")
   
    // declare a shifted alphabet variable that modifies the original
    // alphabet variable, containing all of the original's substring elements, 
    // but shifted by the value given as the shift argument. 
    // use the slice method on the original alphabet variable, causing the shifted
    // alphabet variable to begin at the index specified by the given shift argument.
    // finally, use the concat method to add another slice of the original alphabet
    // variable to the shifted alphabet. This slice method should begin at index 0,
    // and end at the index represented by the given shift argument.
    let alphaShift = alpha.slice(shift).concat(alpha.slice(0, shift))

    // if encode is falsey, the message should be decoded.
    // if encode is falsey, the alphaShift (shifted alphabet) variable should 
    // use the slice and concat methods the same way as before, but this time,
    // using the negative of the given shift argument, thereby decoding the message
    if (!encode) {
      alphaShift = alpha.slice(-shift).concat(alpha.slice(0, -shift))
    }

    // loop through the given input argument message by character using a for loop
    // and input.length. 
    for (let i = 0; i < input.length; i++) {
      let currentChar = input[i]

    // using the test method, check if the current character is a letter between a and z.
    // if that is true, declare a currentIndex variable containing the index of the 
    // current character within the original alphabet variable. Then declare a shiftedChar
    // variable containing the index of the current character within the shifted alphabet variable.
    // add the shiftedChar variable to the result string. 
      if (/[a-z]/.test(currentChar)) {
        let currentIndex = alpha.indexOf(currentChar)
        let shiftedChar = alphaShift[currentIndex]
        result += shiftedChar
      } 
      
    // use else to add the current character to the result string,
    // in the case that the current character is NOT a letter between a and z.
    // This should ensure that spaces are unchanged
      else {
        result += currentChar
      }
    }

    // return the result array
    return result
  }

    // return caesar  
  return {
    caesar,
  }
})()

module.exports = { caesar: caesarModule.caesar }