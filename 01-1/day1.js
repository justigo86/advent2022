const fs = require('fs');

// const lines = fs
//   .readFileSync("data.txt", { encodin: "utf-8" })
//   .split("\n")
//   .filter((line) => Boolean(line))  //remove if line is falsy (does not have code)
//   .map((item) => parseInt(item));   //make each line of data a number

const arr = fs
  .readFileSync("data.txt", { encoding: "utf-8" })
  .split('\r\n\r\n')
  .map((item) => item.split('\r\n'))
  .map((item) => item.map(x => parseInt(x)))
  .map((item) => item.reduce((a, b) => a + b, 0))
  .sort((a, b) => b - a)

console.log(arr[0])