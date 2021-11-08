/** @format */

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.


// Give user compliments
app.get("/api/compliment", (req, res) => {
	const compliments = [
		"Gee, you're a smart cookie!",
		"Cool shirt!",
		"Your Javascript skills are stellar.",
	];

	// choose random compliment
	let randomIndex = Math.floor(Math.random() * compliments.length);
	let randomCompliment = compliments[randomIndex];

	res.status(200).send(randomCompliment);
});

//Tell user their fortune
app.get("/api/fortune", (req, res) => {
	const fortunes = [
		"Education is the ability to meet life’s situations.",
		"Don’t let the past and useless detail choke your existence.",
		"Don’t just think, act!",
		"Don’t confuse recklessness with confidence.",
		"Do not be intimidated by the eloquence of others",
		"Depart not from the path which fate has you assigned.",
	];
	let fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
	res.status(200).send(fortune);
});

// get selection from option
// let selection = document.querySelector("select");
// let result = document.querySelector("h2");

// selection.addEventListener("change", () => {
// 	result.innerText = selection.options[selection.selectedIndex].text;
// });

//app.get("/api/fortune", getFortune)

document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("inspireSel").addEventListener("input", handleSel);
});

const handleSel = (event) => {
	let select = event.target;
	let pick = select.value;
	if (pick == "music") {
		console.log("User pick " + select.value);
	} else if (pick == "meme") {
		console.log("User pick " + select.value);
	} else if (pick == "quote") {
		console.log("User pick " + select.value);
	}
};

app.listen(4000, () => console.log("Server running on 4000"));
