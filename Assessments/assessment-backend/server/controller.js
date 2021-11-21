const database = require("./db.json") 

module.exports = {
  getCompliment: (req, res) => {
    const compliments = database.compliments;
    
    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },

  getFortune: (req, res) => {
    const fortunes = database.fortunes;
    // get random fortune
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let fortune = fortunes[randomIndex];

    res.status(200).send(fortune);
  },

  addQuote: (req, res) => {
    let quotes = database.quotes;
    // need to change test quote
    let userQuote = req.body.testQuote;
    // req.body.testQuote)
    let quote = {
      id: quotes.length + 1,
      text: userQuote,
    };
    
    quotes.push(quote);
    res.status(200).send(quotes);
  },
};
