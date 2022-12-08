import { readFileSync } from 'node:fs'

const lines = readFileSync("data.txt", { encoding: "utf-8" })
  .replace(/\r/g, "")

const part1 = () => {
  const arr = []
  for (let i = 0; i < lines.length; i++) {
    arr.push(lines[i])
    if (arr.length > 4) {
      arr.shift()
    }
    if ([...new Set(arr)].length === 4) {
      console.log(i+1)
      break
    }
  }
}

const part2 = () => {
  const arr = []
  for (let i = 0; i < lines.length; i++) {
    arr.push(lines[i])
    if (arr.length > 14) {
      arr.shift()
    }
    if ([...new Set(arr)].length === 14) {
      console.log(i+1)
      break
    }
  }
}

part1()
part2()