/*
Title: RGB To Hex Conversion
Rank: 5 kyu

Description:
The rgb function is incomplete. Complete it so that passing in RGB decimal
values will result in a hexadecimal representation being returned. Valid 
decimal values for RGB are 0 - 255. Any values that fall out of that range
must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 
3 will not work here.

Examples (input --> output):
255, 255, 255 --> "FFFFFF"
255, 255, 300 --> "FFFFFF"
0, 0, 0       --> "000000"
148, 0, 211   --> "9400D3"

#ALGORITHMS
*/

// My Solution

using System;
public class Kata
{
  private static string ToHex(int n)
  {
    n = Math.Min(255, Math.Max(n, 0));
    string hex = n.ToString("X");
    return hex.Length == 1 ? "0" + hex : hex;
  }
 
  public static string Rgb(int r, int g, int b) 
  { 
    return ToHex(r) + ToHex(g) + ToHex(b);
  }
}
