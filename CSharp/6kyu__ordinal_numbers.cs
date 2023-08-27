/*
Title: Ordinal Numbers
Rank: 6 kyu
*/

// My Solution

using System;
public class Kata
{
  public static string Ordinal(int number, bool brief = false)
  {
    string str = number + "";
    if (str.Length >1 && str[str.Length-2] == '1') return "th";
    if (str[str.Length-1] == '1') return "st";
    if (str[str.Length-1] == '2') return brief ? "d" : "nd";
    if (str[str.Length-1] == '3') return brief ? "d" : "rd";
    return "th";
  }
}