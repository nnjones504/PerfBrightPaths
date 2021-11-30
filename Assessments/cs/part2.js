//addToZero runtime: O(n^2)
const addToZero = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let x = 0; x < arr.length; x++) {
      if (arr[i] + arr[x] === 0) {
        return true;
      }
    }
  }
  return false;
};

//hasUniqueChars runtime: O(n)
const hasUniqueChars = (str) => str.length === new Set(str).size;

//isPangram runtime: O(n)
const isPangram = (str) => {
  // remove duplicates and all spaces, numbers and special chars from string
  let sentence = new Set(str.toLowerCase().replace(/[^a-z]/g, ""));
  return sentence.size === 26 ? true : false;
};

//findLongestWord runtime: O(n)
const findLongestWord = (arr) => {
  let longest = arr[0];
  arr.forEach((element) => {
    if (element.length > longest.length) {
      longest = element;
    }
  });
  return longest.length;
};
