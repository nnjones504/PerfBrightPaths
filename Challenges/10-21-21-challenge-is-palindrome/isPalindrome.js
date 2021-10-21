// Write your code below

function isPalindrom(str){
  str = str.toUpperCase()
  return str === str.split("").reverse ().join("") ? true : false;
}
console.log(isPalindrom("dog"));