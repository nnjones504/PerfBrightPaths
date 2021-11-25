const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

//import controller file
const { getCompliment, getFortune, addQuote, showQuotes, updateQuote, deleteQuote } = require("./controller");

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/quotes", showQuotes);
app.post("/api/quote", addQuote);
app.put("/api/quotes/:id", updateQuote)
app.delete("/api/quotes/:id", deleteQuote)

app.listen(4000, () => console.log("Server running on 4000"));