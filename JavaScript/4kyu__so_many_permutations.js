/*
Title: So Many Permutations!
Rank: 4 kyu
Link: https://www.codewars.com/kata/5254ca2719453dcc0b00027d
#FUNCTIONAL #STRING #ALGORITHMS
*/

// My Solution
function permutations(remaining, prefix = "", result = []) {
  if (remaining.length === 0) {
    result.push(prefix);
    return Array.from(new Set(result));
  }
  for (let i = 0; i < remaining.length; i++) {
    permutations(remaining.slice(0, i) + remaining.slice(i + 1), prefix + remaining[i], result);
  }
  return Array.from(new Set(result));;
}