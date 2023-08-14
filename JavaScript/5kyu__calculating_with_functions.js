/*
Title: Calculating with Functions
Rank: 5 kyu

Description:
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666..:
eight(dividedBy(three()));

#FUNCTIONAL PROGRAMMING
*/

// My Solution

const zero = (action) => getValue(0, action);
const one = (action) => getValue(1, action);
const two = (action) => getValue(2, action);
const three = (action) => getValue(3, action);
const four = (action) => getValue(4, action);
const five = (action) => getValue(5, action);
const six = (action) => getValue(6, action);
const seven = (action) => getValue(7, action);
const eight = (action) => getValue(8, action);
const nine = (action) => getValue(9, action);

const plus = (value) => ({ action: "plus", value });
const minus = (value) => ({ action: "minus", value });
const times = (value) => ({ action: "times", value });
const dividedBy = (value) => ({ action: "dividedBy", value });

function getValue(value, calculation) {
  switch (calculation?.action) {
    case "plus":
      return value + calculation.value;
    case "minus":
      return value - calculation.value;
    case "times":
      return value * calculation.value;
    case "dividedBy":
      return Math.floor(value / calculation.value);
    default:
      return value;
  }
}
