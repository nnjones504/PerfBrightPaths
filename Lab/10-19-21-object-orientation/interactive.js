let person = {
  firstName: "Chanandler",
  lastName: "Bong",
  age: 34
}

console.log(person.firstName);

let meal = {
  appetizer: "chips & salsa",
  entree: "al pastor burrito",
  dessert: "churros",
  drink: "dr.pepper"
}

const {dessert} = meal;
console.log(dessert);


const {appetizer,entree} = meal;

const {drink: bestSodaEver} = meal

const {appetizer: myAppetizer, entree: myEntree, dessert: myDessert, drink: myDrink} = meal;

console.log(bestSodaEver);
console.log(myDrink);
console.log("");

// looping objects
for (let key in person){
  console.log(key)
}

// loop values
for (key in person){
  console.log(`Key: ${key} Value: ${person[key]}`)
}

//add add to objext
person.job = "Statistical Analysis and Data Reconfiguration"

person["pets"] = ["Chicken", "Duck"] // can be done two ways
console.log("object");
for (let key in person){
  console.log(key)
}

let teams = {
  teamOne:["ryan", "alex"],
  teamTwo: ["henry", "cole", "charlie"],
  teamThree: ["porter","blake"],
  teamFour: ["monique", "mariko"],
  teamFive: ["shania", "deepta"]

}

// delete key
delete teams.teamTwo

for (let team in teams){
  console.log(team)
}

// Creating class 
class Dog {
  constructor(name, breed, age){
    this.name = name
    this.breed = breed
    this.age = age
  }

  // class functions
  greeting(){
    console.log(`Hi, my name is ${this.name}. I am a ${this.age} year old ${this.breed}`);
  }
  
}

// create instance
let lassie = new Dog("lassie", "pitt", 1)
console.log(lassie.name);
lassie.greeting()