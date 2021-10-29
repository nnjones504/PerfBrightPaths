const missingNumber = (arr, max) => {
  for (let i = 1; i <= max; i++){
    if (arr.includes(i) === false){
      return i;
    }
  }
}

console.log(missingNumber([1, 2, 3, 4, 5, 6, 7, 9, 10], 10));