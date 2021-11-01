/** @format */

// Required for Express
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const SERVER_PORT = 4000;

// sends friends array to front end
app.get("/api/users", (req, res) => {
	let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
	res.status(200).send(friends);
});
// tells us how the weather is
app.get("/weather/:temperature", (req, res) => {
	const { temperature } = req.params;
	const phrase = `<h3>It was ${temperature} today</h3>`;
	res.status(200).send(phrase);
});

// Run server and log when running
app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`));
