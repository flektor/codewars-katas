/*
Title: Perimeter of squares in a rectangle
Rank: 5 kyu 
Link: https://www.codewars.com/kata/559a28007caad2ac4e000083
*/

// My Solution

export const perimeter = (n:number): number => {
  const fibo = [0, 1];
  for (let i = 2; i < n + 2; i++) {
    fibo.push(fibo[i - 1] + fibo[i - 2]);
  }
  return fibo.reduce((a,c) => a + c) * 4;
}