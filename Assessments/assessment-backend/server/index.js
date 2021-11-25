const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

//import controller file
const { getCompliment, getFortune, addQuote, showQuotes, updateQuote } = require("./controller");

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/quotes", showQuotes);
app.post("/api/quote", addQuote);
app.put("/api/quote", updateQuote)

app.listen(4000, () => console.log("Server running on 4000"));