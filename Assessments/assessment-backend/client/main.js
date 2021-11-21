const baseURL = `http://localhost:4000/api`;

//const errorCallback = (error) => alert(error.response.data);
// id's from HTML
const complimentButton = document.getElementById("complimentButton");
const fortuneButton = document.getElementById("fortuneButton");
const submitQuoteButton = document.getElementById("submitQuote");

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


complimentButton.addEventListener("click", getCompliment);
fortuneButton.addEventListener('click', getFortune);
submitQuoteButton.addEventListener('click', submitQuote);
