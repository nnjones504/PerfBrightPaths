/** @format */

const { default: axios } = require("axios");

const clicked = () => console.log("button clicked");

document.querySelector("#btn").addEventListener("click", clicked);

getData = () => {
	axios.get("https://swapi.dev/api/people/?search=alderaan").then();
};
