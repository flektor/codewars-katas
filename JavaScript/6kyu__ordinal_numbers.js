/*
Title: Ordinal Numbers
Rank: 6 kyu
*/

// My Solution

function ordinal(number, brief) {
  let str = String(number);
  if (str[str.length - 2] === "1") return "th"
  if (str[str.length - 1] === "1") return "st";
  if (str[str.length - 1] === "2") return brief ? "d" : "nd";
  if (str[str.length - 1] === "3") return brief ? "d" : "rd";
  return "th";
}