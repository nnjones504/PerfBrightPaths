// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:

const hasBalancedParens = str => {
  let count = 0;
  for (let i = 0; i < str.length; i++){
    if (str[i] === "(" || str[i] === ")"){
      count++
    }
  }
  return count % 2 === 0
}

console.log(hasBalancedParens(sample1))