const fs = require('fs');

const test = [
  'vJrwpWtwJgWrhcsFMMfFFhFp',
  'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
  'PmmdzqPrVvPwwTWBwg',
  'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
  'ttgJtRGJQctTZtZT',
  'CrZsJsPPZsGzwwsLwLmpwMDw',
]
// .map(item => {
//   return [item.slice(0, item.length/2), item.slice(item.length/2, item.length)]
// })

const rucksack = fs
  .readFileSync("data.txt", { encoding: "utf-8" })
  .split("\r\n")
  // .map(item => {   //commented out for part 2
  //   return [item.slice(0, item.length/2), item.slice(item.length/2, item.length)]
  // })

const triple = () => {
  const arr = []
  for (i = 0; i < rucksack.length; i = i + 3) {
    arr.push(rucksack.slice(i, i + 3))
  }
  return arr
}

//did not use
// const sliceAndSplit = () => {
//   test.map(line => {
//     const part1 = line.slice(0, line.length/2)
//     const part2 = line.slice(line.length / 2)
//     console.log([part1, part2])
//   })
// }

//part 1
// const anomaly = (input) => {
//   return input.map(item => {
//     for (let i = 0; i < item[0].length; i++) {
//       if (item[1].includes(item[0][i])) {
//         return item[0][i]
//       }
//     }
//   })
// }

//part 2
const anomaly = (input) => {
  return input.map(item => {
    let arr = []
    let arr2 = []
    for (let i = 0; i < item[0].length; i++) {
      if (item[1].includes(item[0][i])) {
        arr.push(item[0][i])
      }
      if (item[2].includes(item[0][i])) {
        arr2.push(item[0][i])
      }
    }
    const set1 = [[... new Set(arr)], [... new Set(arr2)]][0]
    const set2 = [[... new Set(arr)], [... new Set(arr2)]][1]
    let merge = []
    for (let i = 0; i < set1.length; i++) {
      if (set2.includes(set1[i])) {
        merge.push(set1[i])
      }
    }
    return merge
  })
}

//part1
// const assign = (arr) => {
//   const numbers = []
//   arr.forEach(item => {
//     if (item === item.toLowerCase()) {
//       numbers.push(item.charCodeAt(0) - 96)
//     } else {
//       numbers.push(item.charCodeAt(0) - 38)
//     }
//   })
//   return numbers.reduce((a, b) => a + b, 0)
// }

//part2
const assign = (arr) => {
  const numbers = []
  for (let i = 0; i < arr.length; i++) {
    arr[i].forEach(item => {
      if (item === item.toLowerCase()) {
        numbers.push(item.charCodeAt(0) - 96)
      } else {
        numbers.push(item.charCodeAt(0) - 38)
      }
    })
  }
  return numbers.reduce((a, b) => a + b, 0)
}

console.log(assign(anomaly(triple())))

// sliceAndSplit() - did not use