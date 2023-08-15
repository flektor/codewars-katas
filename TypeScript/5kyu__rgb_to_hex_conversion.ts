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

export function rgb(r: number, g: number, b: number): string {
  const filter = (n: number) => n <= 0 ? 0 : n >= 255 ? 255 : n;
  const toHex = (n: number) => {
    const res = filter(n).toString(16).toUpperCase();
    return res.length === 1 ? "0" + res : res;
  };
  return toHex(r) + toHex(g) + toHex(b);
}
