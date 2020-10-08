// Require express - gives us a function
const express = require('express');
const bodyParser = require('body-parser');
// require body-parser to parse through data

// Create an instance of express by calling the function 
// returned above - gives us an object
const app = express();
const port = 5000;

const quotesData = require ('./modules/quotes.js');

// express static file serving - public is the folder name
app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended: true}));

let index = 0;

app.get('/quotes', (req, res) => {
    console.log('hi from get request');
    res.send(quotesData.list);
})

app.get('/randomQuote', (req, res) => {
    let randomNumber = getRandomInt(quotesData.list.length);
    res.send(quotesData.list[randomNumber]);
});

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

app.post('/submitQuotes', (req, res) => {
      console.log('hello from post', req.body);;
      //push req.body to our quotesData array
      quotesData.list.push(req.body);
      
      
      
      res.sendStatus(200);

      //data is held in req - req is an object
  });

app.listen(port, () => {
    console.log("Up and running on port: ", port);
});
