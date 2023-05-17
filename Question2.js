// Question #2: Array Deduping
// Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem, demonstrate how it can be solved with filter().Solve the problem with and without recursion.

//   Example
// Input: [7, 9, "hi", 12, "hi", 7, 53]

// Output: [7, 9, "hi", 12, 53]

//Without Filter
const arrayDeduping = (inputArray) => {
  let result = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray.indexOf(inputArray[i]) == i) {
      result.push(inputArray[i]);
    }
  }
  return result;
}

//With Filter
const arrayDedupingWithFilter = (inputArray) => {
  return inputArray.filter((element, index) => inputArray.indexOf(element) == index);
}

//With Recursion
const arrayDedupingWithRecursion = (inputArray) => {
  let result = inputArray;
  if (inputArray.filter((element, index) => inputArray.indexOf(element) !== index).length == 0) {
    return inputArray;
  }

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray.indexOf(inputArray[i]) !== i) {
      result.splice(i, 1);
      break;
    }
  }
  return arrayDedupingWithRecursion(result);
} 