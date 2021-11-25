const database = require("./db.json");
let quotes = database.quotes;
let quotesObjects = database.quotesObjects;
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
    let quote = `id: ${quotes.length + 1} Quote: ${userQuote}`;

    quotes.push({
      id: quotes.length + 1,
      quote: userQuote,
    });
    res.status(200).send(quotes);
  },

  showQuotes: (req, res) => {
    res.status(200).send(quotes);
  },

  updateQuote: (req, res) => {
      let index = quotes.findIndex((elem) => elem.id === +req.params.id);
      quotes[index].quote = req.body;
      res.status(200).send(quotes);


  },

  // updateMovie: (req, res) => {

  //   if (req.body.type === "plus" && movies[index].rating < 5) {
  //     movies[index].rating += 1;
  //   } else if (req.body.type === "minus" && movies[index].rating > 1) {
  //     movies[index].rating -= 1;
  //   } else {
  //     res.sendStatus(400);
  //   }
  //   res.status(200).send(movies);
  // },
};
