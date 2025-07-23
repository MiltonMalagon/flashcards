const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;
const mainRoutes = require('./routes/index');
const cardRoutes = require('./routes/cards');

app.listen(port, () => {
  console.log(`The app is running on localhost: ${port}`);
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use('/public', express.static('public'));

app.set('view engine', 'pug');

app.use(mainRoutes);
app.use('/cards', cardRoutes);

app.use((req, res, next) => {
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