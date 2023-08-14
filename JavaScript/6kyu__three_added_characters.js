/*
Title: Three added Characters
Rank: 6 kyu

Description:
Given two strings, the first being a random string and the second being the same as the first, but with three added characters somewhere in the string (three same characters),

Write a function that returns the added character

E.g
string1 = "hello"
string2 = "aaahello"

// => 'a'
The above is just an example; the characters could be anywhere in the string and string2 is actually shuffled.

Another example
string1 = "abcde"
string2 = "2db2a2ec"

// => '2'
Note that the added character could also exist in the original string

string1 = "aabbcc"
string2 = "aacccbbcc"

// => 'c'
You can assume that string2 will aways be larger than string1, and there will always be three added characters in string2.

Write the function addedChar() that takes two strings and return the added character as described above.

#LOGIC, #STRINGS
*/

// My Solution

function addedChar(s1, s2) {
  const chars1 = s1.split("");
  let index;
  for (let i = 0; i < s2.length; i++) {
    index = chars1.indexOf(s2[i]);
    if (index !== -1) {
      chars1[index] = null;
      continue;
    }
    return s2[i];
  }
}
