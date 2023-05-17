/* Problem #1
Solve Problem 1 on Project Euler using a functional approach. Here is the problem:

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000. */

const problemOne = (inputNum) => {
  let result = 0;
  for (let i = 0; i < inputNum; i++) {
    if ((i % 3 == 0) || (i % 5 == 0)) {
      result += i;
    }
  }
  return result;
}