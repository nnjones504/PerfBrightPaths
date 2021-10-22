// Write your solution below:

const pigLatin = str => {
  let arr = []
  for (item of str.split(" ")){
    if(item.startsWith("a","e","i","o","u")){
      item += "yay"
    } else {
      let letter = str[0]
      item = item.substring(1) + letter + "ay"
    }
    arr.push(item)
  }
  return arr.join(" ")
}

console.log(pigLatin("porcupines are cute"))
