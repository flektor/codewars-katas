/*
Title: Write Number in Expanded Form
Rank: 6 kyu

Description:
Write Number in Expanded Form
You will be given a number and you will need to return it as a
string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2!!

#STRINGS, #MATHEMATICS, #ALGORITHMS, #FUNDAMENTALS
*/

// My Solution
function expandedForm(num) {
  return [...String(num)].map((n, i, arr) =>
    n * Math.pow(10, arr.length - i - 1)
  ).filter((n) => n > 0).join(" + ");
}
