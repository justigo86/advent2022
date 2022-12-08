import { readFileSync } from 'node:fs'

const lines = readFileSync("data.txt", { encoding: "utf-8" })
  .replace(/\r/g, "")

const [stacks, directions] = lines.split('\n\n').map(item => item.split('\n'));

const rearrange = []

const arrStacks = stacks
  .map(line => [...line].filter((char, index) => index % 4 === 1))

//create stack object with the numbers (as string) for keys and empty array for values
const stacksObj = arrStacks.pop().reduce( (acc, curr) => (acc[curr]=[], acc), {})
//for loops to push items from arrStacks to each associated object value - in order
for (const line of arrStacks) {
  for (let i = 0; i < line.length; i++) {
    if (line[i] !== ' ') {
      stacksObj[i+1].unshift(line[i])   //unshift to put them in the proper order
    }
  }
}
// console.log(stacksObj)

const arrDirections = directions
  .map(line => line.split(' '))
const directionsObjs = []
  for (let item of arrDirections) {
    directionsObjs.push(item.reduce( (acc, curr, i, arr) => {
      i%2===0 ? (acc[curr] = arr[i+1], acc) : false
      return acc
    }, {}))
  }
// console.log(directionsObjs)

const part1 = () => {
  for (let obj of directionsObjs) {
    // let crates = stacksObj[obj.from].splice(-obj.move, obj.move).reverse()  //part1
    let crates = stacksObj[obj.from].splice(-obj.move, obj.move)  //part2
    stacksObj[obj.to].push.apply(stacksObj[obj.to], crates)
  }
  let final = ''
  for (let stack in stacksObj) {
    let last = stacksObj[stack].pop()
    final+=last
  }
  console.log(final)
}

const part2 = () => {

}

part1()
part2()