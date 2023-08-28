/*
Title: Encrypt this!
Rank: 6 kyu

Description:
Acknowledgments:
I thank yvonne-liu for the idea and for the example tests :)

Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis "Hello" == "72olle"
encryptThis "good" == "103doo"
encryptThis "hello world" == "104olle 119drlo"

#FUNDAMENTALS, #STRINGS, #REGULAR_EXPRESSIONS, #ARRAYS, #CIPHERS, #ALGORITHMS, #CRYPTOGRAPHY, #SECURITY
*/

// My Solution

export const encryptThis = (str: string): string => {
  if (!str) return "";
  return str.split(" ").map((w) => {
    if (w.length === 1) return w.charCodeAt(0);
    if (w.length === 2) return `${w.charCodeAt(0)}${w[1]}`;
    return `${w.charCodeAt(0)}${w[w.length - 1]}${w.slice(2, -1)}${w[1]}`;
  }).join(" ");
};
