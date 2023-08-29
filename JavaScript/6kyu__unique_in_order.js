/*
Title: Unique In Order
Rank: 6 kyu
Link: https://www.codewars.com/kata/54e6533c92449cc251001667
*/

// My Solution

function uniqueInOrder(sequence) {
  const output = [];
  for (const char of sequence) {
    if (output[output.length - 1] !== char) {
      output.push(char);
    }
  }
  return output;
}