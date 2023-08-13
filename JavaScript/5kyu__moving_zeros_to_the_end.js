/*
Title: Moving Zeros To The End
Rank: 5 kyu

Description:
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

#ARRAYS, #SORTING, #ALGORITHMS
*/

// My Solution

function moveZeros(arr) {
  let zerosCounter = 0;
  return arr.filter((item) => {
    if (item === 0) {
      zerosCounter++;
    }
    return item !== 0;
  }).concat(new Array(zerosCounter).fill(0));
}
