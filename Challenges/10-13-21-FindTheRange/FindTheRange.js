// Starting array
let array = [28, 43, -12, 30, 4, 0, -36]

// Write your solution below:
let lrg = array[0];
let sml = array[0];

// iterate through array & determine smallest and largest int
for (let i = 0; i<array.length; i++){
    if (array[i] >= lrg){
        lrg = array[i];
    }
    if (array[i] <= sml){
        sml = array[i];
    }
}
console.log(sml + ", " + lrg);


