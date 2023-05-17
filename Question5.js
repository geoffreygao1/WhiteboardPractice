// Write an algorithm that sorts an array without using the sort() method. There are many different sorting algorithms — take the time to read about the following:

// Quick sort
// Merge sort
// Heap sort
// Insertion sort
// Bubble sort
// Selection sort
// You may implement any of the above algorithms (or your own) to solve the problem — as long as it doesn't use sort().

// Example
// Input: [9, 2, 7, 12]

// Output: [2, 7, 9, 12]

const fakeSort = (inputArray) => {
  result = inputArray;
  for (let i = 0; i < inputArray.length - 1; i++) {
    if (inputArray[i] > inputArray[i + 1]) {
      x = inputArray[i];
      y = inputArray[i + 1];
      inputArray[i] = y;
      inputArray[i + 1] = x;
      fakeSort(inputArray);
    }
  }
  return result;
}