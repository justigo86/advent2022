const fs = require('fs');

const lines = fs
  .readFileSync("data.txt", { encoding: "utf-8" })
  .split("\r\n")
  // .map(line => {
  //   for (let i = 9; i < line.length; i--) {
  //     for (let j)
  //   }
  // })

console.log(lines[6][33])