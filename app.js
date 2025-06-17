const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

//const colors = ['red','orange','yellow','green','blue','purple'];
// const firstNames = [
//     'James', 
//     'Raphael', 
//     'Hector', 
//     'Victor', 
//     'Robert'];
// const lastNames = [
//     'Rickets',
//     'Donado',
//     'Perea',
//     'Claros',
//     'Georgescu'
//   ];

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
  const name = req.cookies.username;
  if (name) {
    res.render('index', /*pug var name*/{/*name: name*/ name});
  } else {
    res.redirect('/hello');
  }  
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
  const name = req.cookies.username;
  if (name) {
    res.redirect('/');
  } else {
    res.render('hello');
  }
  // res.render('hello');
});

app.post('/hello', (req, res) => {
  res.cookie('username', req.body.username);
  // console.dir(req.body);
  // res.render('hello', {name: req.body.username});
  res.redirect('/');
  // res.json(req.body);
  // const cookie = res.cookie('username', req.body.username);
  // if (cookie) {
  //   res.redirect('/');
  // } else {
  //   res.render('/hello');
  // }
});

app.post('/goodbye', (req, res) => {
  res.clearCookie('username')
  res.redirect('/hello');
});