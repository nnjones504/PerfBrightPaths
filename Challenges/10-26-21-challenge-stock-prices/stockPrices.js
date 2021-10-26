let arr = [15, 10, 20, 22, 1, 9]
let max = arr[0]
let min = arr[0]
let profit = 0;

let best = arr => {
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > max){
      max = arr[i]
    }
    if (arr[i] < min && arr.indexOf(arr[i]) < arr.indexOf(max)){
      min = arr[i]
    }
  }
  profit = max - min
  return `$${profit} Buy at $${min} and sell at $${max}`
}

console.log(best(arr));
