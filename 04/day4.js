import { readFileSync } from 'node:fs'

const lines = readFileSync("data.txt", { encoding: "utf-8" })
  // .replace(/-/g, '')
  .split("\r\n")
  .map(item => item.split(","))
  .map(item => {
    for (let i = 0; i < item.length; i++) {
      for (let j = 0; j < item[i].length; j+2) {
        const tally = 0
        const start1 = Number(item[i].split('-')[j])
        const end1 = Number(item[i].split('-')[j+1])
        const start2 = Number(item[i+1].split('-')[j])
        const end2 = Number(item[i+1].split('-')[j+1])
        //part 1
        // if (((start1 <= start2) && (end1 >= end2)) || ((start2 <= start1) && (end2 >= end1))) {
        //   return tally + 1
        // }
        //part 2
        if (!((end1 < start2) || (start1 > end2) || (start2 > end1) || (end2 < start1))) {
          return tally + 1
        }
        return tally
      }
    }
  })


  const reduce = (data) => {
    return data.reduce((acc, curr) => {
      return acc + (curr || 0)
    }, 0)
  }


console.log(reduce(lines))