import { readFileSync } from 'node:fs'

const test = [
  'A Y',
  'B X',
  'C Z',
  'A Y'
]

const lines = readFileSync("data.txt", { encoding: "utf-8" })
  .split("\r\n")
//   .map((item) => parseInt(item));   //make each line of data a number

//part 1
// const counter = (data) => {
//   return data.map(item => {
//     let count = 0
//     if(item[2] === 'X') {
//       if(item[0] === 'A') {
//         return count + 4
//       }
//       if(item[0] === 'C') {
//         return count + 7
//       }
//       return count + 1
//     }
//     if(item[2] === 'Y') {
//       if(item[0] === 'B') {
//         return count + 5
//       }
//       if(item[0] === 'A') {
//         return count + 8
//       }
//       return count + 2
//     }
//     if(item[2] === 'Z') {
//       if(item[0] === 'C') {
//         return count + 6
//       }
//       if(item[0] === 'B') {
//         return count + 9
//       }
//       return count + 3
//     }
//   })
// }

//part 2
const counter = (data) => {
  return data.map(item => {
    let count = 0
    if(item[2] === 'X') {
      if(item[0] === 'A') {
        return count + 3
      }
      if(item[0] === 'B') {
        return count + 1
      }
      return count + 2
    }
    if(item[2] === 'Y') {
      if(item[0] === 'A') {
        return count + 4
      }
      if(item[0] === 'B') {
        return count + 5
      }
      return count + 6
    }
    if(item[2] === 'Z') {
      if(item[0] === 'A') {
        return count + 8
      }
      if(item[0] === 'B') {
        return count + 9
      }
      return count + 7
    }
  })
}

const reduce = (data) => {
  return data.reduce((acc, curr) => {
    return acc + (curr || 0)
  }, 0)
}

console.log(reduce(counter(lines)))