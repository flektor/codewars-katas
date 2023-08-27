/*
Title: Count IP Addresses
Rank: 5 kyu
*/

// My Solution
function ipsBetween(start, end) {
  const toNumber = (ip) => ip.split('.')
    .reduce((a, c, i) => a + Number(c) * Math.pow(256, 3 - i), 0);
  return toNumber(end) - toNumber(start);
}