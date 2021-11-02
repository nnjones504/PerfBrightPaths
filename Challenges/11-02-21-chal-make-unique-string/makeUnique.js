// Write your solution below:
const makeUnique = str => {
  str = new Set(str);
  return [...str].join("")
}

console.log(makeUnique("helloworld"));