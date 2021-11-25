const database = require("./db.json");
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
    // add quote to database
    quotes.push({
      id: quotes.length + 1,
      quote: userQuote,
    });
    res.status(200).send(quotes);
  },

  showQuotes: (req, res) => {
    // will output quotes
    res.status(200).send(quotes);
  },

  updateQuote: (req, res) => {
    // get index
    let index = parseInt(req.params.id);
    for (let i = 0; i < quotes.length; ++i) {
      // updates quote with new quote
      if (quotes[i].id === index) {
        quotes[i].quote = req.body.update;
      }
    }
    res.status(200).send(quotes);
  },

  deleteQuote :(req, res) => {
    let index = quotes.findIndex(elem => elem.id === +req.params.id);
    // delete quote at index
    quotes.splice(index, 1)
    res.status(200).send(quotes);
  }
};
