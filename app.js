const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;
const routes = require('./routes/index');
const cardRoutes = require('./routes/cards');

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

//Body Parser
// let bodyString = ''
//   req.on('data', chunk => bodyString += chunk.toString());
//   req.on('end', () => {
//     console.log(bodyString);
//   });
//Middleware test
// app.use((req, res, next) => {
//   // req.message = 'This message made it!';
//   // console.log('One');
//   const err = new Error('Oh noes!');
//   err.status = 500;
//   console.log('Hello');
//   next(err);
// });
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(routes);
app.use('/cards', cardRoutes);

app.use((req, res, next) => {
  // console.log('Two');
  // console.log(req.message);
  console.log('world!');
  next();
});

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//Error handler
app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error', err);
});