// Turning Strings to URLs
// URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

// You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

// Example
// Input: "Jasmine Ann Jones"

// Output: "Jasmine%20Ann%20Jones"

//Without Recursion
const stringToUrl = (inputString) => {
  //Split string by spaces into array
  splitArr = inputString.split(' ');
  //Join with %20
  output = splitArr.join('%20');
  return output;
}

//With Recursion
const stringToUrlRecursive = (inputString) => {
  //useRecursion
  splitArr = inputString.split('');
  if (!splitArr.includes(' ')) {
    return inputString;
  }
  for (let i = 0; i < splitArr.length; i++) {
    if (splitArr[i] == ' ') {
      splitArr[i] = '%20';
      break;
    }
  }
  return stringToUrlRecursive(splitArr.join(''));
}