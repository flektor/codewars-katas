/*
Title: Counting Duplicates
Rank: 6 kyu

Description:
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

#STRINGS, #FUNDAMENTALS
*/

// My Solution

function duplicateCount(text) {
  const charRepetition = new Map();

  for (let char of [...text]) {
    char = char.toLowerCase();

    if (charRepetition.has(char)) {
      charRepetition.set(char, charRepetition.get(char) + 1);
      continue;
    }

    charRepetition.set(char, 1);
  }

  let count = 0;
  for (const [key, value] of charRepetition) {
    if (value > 1) {
      count++;
    }
  }
  return count;
}
