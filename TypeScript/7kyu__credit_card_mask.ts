/*
Title: Credit Card Mask
Rank: 7 kyu
*/

// My Solution

export function maskify(cc: string): string {
  if (cc.length < 5) return cc;
  return "#".repeat(cc.length - 4) + cc.substring(cc.length - 4);
}
