const fs = require('fs');

// const lines = fs
//   .readFileSync("data.txt", { encodin: "utf-8" })
//   .split("\n")
//   .filter((line) => Boolean(line))  //remove if line is falsy (does not have code)
//   .map((item) => parseInt(item));   //make each line of data a number

const arr = fs
  .readFileSync("data.txt", { encoding: "utf-8" })  //read the txt file and return the content as string
  .split('\r\n\r\n')    //split string on each empty line into individual arrays
  .map((item) => item.split('\r\n'))    //split each array string into separate strings
  .map((item) => item.map(x => parseInt(x)))    //parse each string item into a number
  .map((item) => item.reduce((a, b) => a + b, 0))   //add up numbers within each array
  .sort((a, b) => b - a)    //sort array from highest to lowest number

// console.log(arr[0])
console.log(arr[0] + arr[1] + arr[2])