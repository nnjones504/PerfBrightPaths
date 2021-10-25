const hasMoreVowels = word => {
  return word.split("").filter((elem) => /[aeiou]/i.test(elem)).length > word.split("").length / 2 ? true : false
}

console.log(hasMoreVowels("Aal"));

/* /[aeiou]/ checks for vowels 
  i  = case insensitive
*/