const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

//const colors = ['red','orange','yellow','green','blue','purple'];
const firstNames = [
    'James', 
    'Raphael', 
    'Hector', 
    'Victor', 
    'Robert'];
const lastNames = [
    'Rickets',
    'Donado',
    'Perea',
    'Claros',
    'Georgescu'
  ];

app.listen(port, () => {
  console.log(`The app is running on localhost: ${port}`);
});

app.use(bodyParser.urlencoded({extended: false}));
//Body Parser
// let bodyString = ''
//   req.on('data', chunk => bodyString += chunk.toString());
//   req.on('end', () => {
//     console.log(bodyString);
//   });
app.use(cookieParser());

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  //res.send(`<h1>This is Express!</h1>`, {"name": "Eric"});
  res.render('index');
});

app.get('/cards', (req, res) => {
  res.render('card', {
    prompt: "Who is buried in Grant's tomb?",
    //hint: "Think about whose tomb it is."
    //colors
  });
  //res.locals.prompt = "Who is buried in Grant's tomb?";
  res.render('card');
});

app.get('/sandbox', (req, res) => {
  res.render('sandbox', {
    firstNames, lastNames
  });
});

app.get('/hello', (req, res) => {
  res.render('hello', {name: req.cookies.username});
});

app.post('/hello', (req, res) => {
  res.cookie('username', req.body.username);
  // console.dir(req.body);
  res.render('hello', {name: req.body.username});
  // res.json(req.body);
});