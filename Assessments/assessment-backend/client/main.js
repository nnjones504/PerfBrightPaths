const baseURL = `http://localhost:4000/api`;

// id's from HTML
const complimentButton = document.getElementById("complimentButton");
const fortuneButton = document.getElementById("fortuneButton");
const submitQuoteButton = document.getElementById("submitQuote");
const showQuotesButton = document.getElementById("showQuotesButton");
const UpdateButton = document.getElementById("UpdateButton");
const deleteButton = document.getElementById("deleteButton");

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
  axios
    .post(`${baseURL}/quote`, { testQuote: userInput })
    .then((response) => {
      alert(`submitted: ${JSON.stringify(response.data)}`);
    })
    .catch(errorCallback);
};

const showQuotes = () => {
  axios
    .get(`${baseURL}/quotes`)
    .then((response) => {
      for (let i = 0; i < response.data.length; i++) {
        document.getElementById("hasData");
        paragraph = document.createElement("p");
        let text = document.createTextNode(
          `${JSON.stringify(response.data[i])}`
        );
        paragraph.append(text);
        paragraph.append(document.createElement("br"));
        document.getElementById("printQuotes").appendChild(paragraph);
      }
    })
    .catch(errorCallback);
};

const updateQuote = (id, update) => {
  update = document.getElementById("UpdateQuote").value;
  id = parseInt(document.getElementById("idSelect").value);
  // console.log(id);
  // console.log(typeof id);
  axios
    .put(`${baseURL}/quotes/${id}`, { update })
    .then(showQuotes())
    .catch(errorCallback);
};

const deleteQuote = (id) => {
  axios.delete(`${baseURL}/quotes/${id}`).then(showQuotes).catch(errorCallback);
};

// button clicks
complimentButton.addEventListener("click", getCompliment);
fortuneButton.addEventListener("click", getFortune);
submitQuoteButton.addEventListener("click", submitQuote);
showQuotesButton.addEventListener("click", showQuotes);
UpdateButton.addEventListener("click", updateQuote);
deleteButton.addEventListener("click", deleteQuote);

// add options based on how many quotes given
const addOptions = () => {
  axios
    .get(`${baseURL}/quotes`)
    .then((response) => {
      // will add <option> to html based on how many items in list
      for (let i = 0; i < response.data.length; i++) {
        let option = document.createElement("option");
        option.text = response.data[i].id;
        option.value = response.data[i].id;
        select = document.getElementById("idSelect");
        select.appendChild(option);
      }
    })
    .catch(errorCallback);
};

addOptions();
