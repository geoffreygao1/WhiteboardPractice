// Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an array or use array methods to solve this problem. The algorithm should return a boolean.

// Example
// Input: "hello"

// Output: false

// Input: "copyright"

// Output: true


const uniqueString = (inputString) => {
  for (let i = 0; i < inputString.length; i++) {
    for (let j = 0; j < inputString.length; j++) {
      if (inputString[i] == inputString[j] && i !== j) {
        return false;
      }
    }
  }
  return true;
}