/*
Title: Descending Order
Rank: 7 kyu

Description:
Your task is to make a function that can take any non-negative integer as an argumentand return it
with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

#FUNDAMENTALS
*/

// My Solution

function descendingOrder(n) {
  return parseInt(
    [...n.toString()].sort((a, b) => b - a).join().replaceAll(",", ""),
  );
}
