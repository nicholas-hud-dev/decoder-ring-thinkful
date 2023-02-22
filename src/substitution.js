// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
// declare a variable called keyAlpha. Assign to keyAlpha a string 
// containing the 26 letters of the alphabet, using the split method
// to create an array of individual letter substrings
  const keyAlpha = "abcdefghijklmnopqrstuvwxyz".split("")

// declare a result variable, assigned with an empty array
  const result = []

  function substitution(input, alphabet, encode = true) {

// set the given input to lowercase
    input = input.toLowerCase()

// create a variable called checkForRepeats, assigned with a new set
// containing the given alphabet string. 
    const checkForRepeats = new Set(alphabet)

// if the given alphabet is undefined, OR less than 26 characters long,
// OR (using the spread operator to convert the checkForRepeats
// set back into an array), if the alphabet contains 
// repeated characters, return false
    if (alphabet === undefined || alphabet.length < 26 || [...checkForRepeats].length < 26) {
    return false  
    } 

// use the split method on the given alphabet string to create
// an array of substrings
    alphabet.split("")

// if encode is true, loop through 26 times. With each iteration,
// the result array at each index of the keyAlpha array will contain
// the character at the corresponding index in the given alphabet array
    if (encode)
    {
      for (let i = 0; i < keyAlpha.length; i++)
      {
        result[keyAlpha[i]] = alphabet[i]
        
      }

// if encode is false, do the same as the previous step, but this time
// the result array at each index of the given alphabet array will
// contain the character at the corresponding index in the keyAlpha array
    } else
    {
      for (let i = 0; i < 26; i++)
      {
        result[alphabet[i]] = keyAlpha[i]
      }
    }
// declare a new variable called answer. This variable contains the 
// given input string, split into an array of substrings by character.
// then, using the map method on that array, iterate over each character.
// if the given character is a space, return a space (" ").
// otherwise, return the result array at the index of the given character
    let answer = input.split("").map((char) => {
      if (char === " ") return " "
      return result[char]
    })
// using the join method (with an empty string) on the answer array,
// return the characters in the answer array, joined into a single 
// string 
    return answer.join("")
  }

  return {
    substitution,
  }
})()

module.exports = { substitution: substitutionModule.substitution }