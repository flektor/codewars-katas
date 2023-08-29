/*
Title: Perimeter of squares in a rectangle
Rank: 5 kyu 
Link: https://www.codewars.com/kata/559a28007caad2ac4e000083
*/

// My Solution

using System.Numerics;
public class SumFct
{
  public static BigInteger perimeter(BigInteger n) 
  { 
    BigInteger[] fibo = new BigInteger[((int)n) + 2];
    fibo[0] = 0;
    fibo[1] = 1;
    for (int i = 2; i < n + 2; i++) {
      fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    BigInteger sum = 0;
    for (int i = 0; i < fibo.Length; i++) {
      sum += fibo[i];
    }
    return sum * 4; 
  }
}