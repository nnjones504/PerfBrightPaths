const database = require("./db.json") 
let quotes = database.quotes;
let fortunes = database.fortunes;
let compliments = database.compliments;


module.exports = {
  getCompliment: (req, res) => {    
    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },

  getFortune: (req, res) => {
    // get random fortune
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let fortune = fortunes[randomIndex];

    res.status(200).send(fortune);
  },

  addQuote: (req, res) => {
    let userQuote = req.body.testQuote;
    let quote = `id: ${quotes.length +1} Quote: ${userQuote}`;
    
    quotes.push(quote);
    res.status(200).send(quotes);
  },

  showQuotes: (req, res) => {
    res.status(200).send(quotes);
  }
};
