// Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.

// Example
// Input: "aaabccdddda"

// Output: "3ab2c4da"

//Without Recursion
const stringCompression = (inputString) => {
  let splitArr = inputString.split('');
  let result = '';
  let counter = 1;

  for (let i = 0; i < splitArr.length; i++) {
    if (splitArr[i] === splitArr[i + 1]) {
      counter++;
    } else {
      result += (counter > 1) ? `${counter}${splitArr[i]}` : splitArr[i];
      counter = 1;
    }
  }
  return result;
};

//With Recursion
const stringCompressionWithRecursion = (inputString) => {
  let splitArr = inputString.split('');
  let result = '';
  let counter = 1;

  if (inputString == "") {
    return inputString;
  }

  for (let i = 0; i < splitArr.length; i++) {
    if (splitArr[i] === splitArr[i + 1]) {
      counter++;
    } else {
      result += (counter > 1) ? `${counter}${splitArr[i]}` : splitArr[i];
      splitArr.splice(0, counter);
      return result + stringCompressionWithRecursion(splitArr.join(''));
    }
  }
  return result;
}
