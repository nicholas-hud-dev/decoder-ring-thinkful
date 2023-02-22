// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
const polybiusModule = (function () {

  // create a variable called encodeKey, containing an array of key-value pairs.
  // since we're encoding, the keys should be the 26 letters of the alphabet,
  // and the values should be the two numerals associated with each letter's
  // location on a 5x5 grid, where "i" and "j" share a space
  const encodeKey = {
    "a": 11, "b": 21, "c": 31, "d": 41, "e": 51,
    "f": 12, "g": 22, "h": 32, "i": 42, "j": 42, "k": 52, 
    "l": 13, "m": 23, "n": 33, "o": 43, "p": 53, 
    "q": 14, "r": 24, "s": 34, "t": 44, "u": 54, 
    "v": 15, "w": 25, "x": 35, "y": 45, "z": 55,
  }

  // create a variable called decodeKey, containing an array of key-value pairs,
  // where the keys and values from encodeKey are inverted. also, because you can't
  // use the same key (42) twice (for i and j), you need to put i/j as the value
  const decodeKey = {
    11: "a", 21: "b", 31: "c", 41: "d", 51: "e",
    12: "f", 22: "g", 32: "h", 42: "i/j", 52: "k",
    13: "l", 23: "m", 33: "n", 43: "o", 53: "p",
    14: "q", 24: "r", 34: "s", 44: "t", 54: "u",
    15: "v", 25: "w", 35: "x", 45: "y", 55: "z",
  }

  function polybius(input, encode = true) {
    // your solution code here
    // ensure that all characters in the given input message are lowercase
    input = input.toLowerCase()

    // declare a variable called message 
    let message

    // declare a variable called key, containing the encodeKey object.
    let key = encodeKey

    // if encode is true, set the message variable to contain the given input,
    // using the split method to separate the characters into substrings
    if(encode) {
      message = input.split("")
    }

    // if encode is NOT true, use else to assign the decodeKey object
    // to the key variable. Then, assign the given input message (split by spaces)
    // to the message variable. Next, create a variable called isOdd. Use the 
    // reduce method on the message variable to check if its length is divisible
    // by two. since the initial value is 0, not 1, the message length being divisible
    // by two will mean that the message length is odd. 
    // if isOdd is true, return false
     else {
      key = decodeKey;
      message = input.split(" ")
      const isOdd = message.reduce((acc, array) => acc + array.length, 0) % 2
      if(isOdd) {
        return false
      }

    // outside the scope of the previous if and else statements,
    // use the map method to iterate over each "section" of the message array.
    // return "section", splitting each section into an array of individual 
    // characters. Then use the reduce method to iterate over each character
    // of the section array and transform it into a corresponding number.
    // the reduce method takes four arguments: "acc", "char", "index", and "collect".
    // "acc" is an accumulator variable that will eventually contain the final transformed 
    // section array. char is the current character being processed. index is the
    // index of the current character in the section array. collect is the 
    // original section array. if the current character is a space, push a string
    // containing a space to the accumulator variable. else if the index of the current
    // character is not divisible by two, push the current character and the original
    // section array at the index of the current character plus one. return acc
      message = message.map(section => {
      
        return section.split("").reduce((acc, char, index, collect) => {
          if(char === " ") {
            acc.push(" ")
          } else if(!(index % 2)) {
            acc.push(char + collect[index + 1])
          }
          return acc
        }, [])
      })
    // use the reduce method 
    // to concatenate the pairs of digits back into a single string. 
    // the reduce method takes in two parameters, a and b. Use a to represent
    // the accumulated value, and b for the current value. use the concat 
    // method to add the accumulated value a with a space (" ") and the current value b.
      .reduce((a, b) => a.concat(" ", b))
    }

    // using the map method on the message variable, return the character 
    // associated with the given pair of digits, or a space, if a match isn't found.
    return message.map(char => key[char] || " ").join("")
  }

    // return polybius
  return {
    polybius
  }
})()
module.exports = { polybius: polybiusModule.polybius }
