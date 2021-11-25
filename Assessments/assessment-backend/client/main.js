const baseURL = `http://localhost:4000/api`;

//const errorCallback = (error) => alert(error.response.data);
// id's from HTML
const complimentButton = document.getElementById("complimentButton");
const fortuneButton = document.getElementById("fortuneButton");
const submitQuoteButton = document.getElementById("submitQuote");
const showQuotesButton = document.getElementById("showQuotesButton");

const errorCallback = (error) => console.log(error.response.data);

const getCompliment = () => {
  axios
    .get(`${baseURL}/compliment`)
    .then(function (response) {
      const data = response.data;
      alert(data);
    })
    .catch(errorCallback);
};

const getFortune = () => {
  axios
    .get(`${baseURL}/fortune`)
    .then((response) => {
      alert(response.data);
    })
    .catch(errorCallback);
};

const submitQuote = () => {
  let userInput = document.getElementById("quote").value;
  //alert(userInput);
  axios
    .post(`${baseURL}/quote`, { testQuote: userInput })
    .then((response) => {
      alert(JSON.stringify(response.data));
    })
    .catch(errorCallback);
};

const showQuotes = () => {
  axios.get(`${baseURL}/quotes`).then((response) => {
    for (let i = 0; i < response.data.length; i++) {
        document.getElementById("hasData");
        paragraph = document.createElement("p");
        let text = document.createTextNode(
          `${JSON.stringify(response.data[i])}`
        );
        //document.getElementById("currentQuotes").value = text;
        paragraph.append(text);
        paragraph.append(document.createElement("br"));
        document.getElementById("printQuotes").appendChild(paragraph);
      }
    })
  }

complimentButton.addEventListener("click", getCompliment);
fortuneButton.addEventListener("click", getFortune);
submitQuoteButton.addEventListener("click", submitQuote);
showQuotesButton.addEventListener("click", showQuotes);

//showQuotes();
