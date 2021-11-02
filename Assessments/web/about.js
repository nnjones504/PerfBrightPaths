/** @format */

console.log("hello world");

function handleSubmit(evt) {
	evt.preventDefault();
	alert("form submitted");
}

const compliment = (evt) => {
	evt.preventDefault();
	alert(
		"omg another ego stroke. you're beautiful. i'm sure i get a 100 now, right?"
	);
};

const alertBtn = evt => {
  evt.preventDefault();
  alert("")
}

let form = document.querySelector("form#contact");
let duck = document.querySelector("img#duck");

form.addEventListener("submit", handleSubmit);
duck.addEventListener("mouseover", compliment);
