// Write your code below

let str = "Moonday";
let str2 = "Monday";
let str3 = "BOB";

function uniqueChars (str){
  newStr = str.split("");
  // remove duplicates
  newStr = new Set(newStr);
  // convert back to string
  newStr = [...newStr].join()
  if (newStr === str){
    return true
  }
  
  return false
}

console.log(uniqueChars(str));