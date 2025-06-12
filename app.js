const express = require('express');
const app = express();
const port = 3000;



app.set('view engine', 'pug');

app.get('/', (req, res) => {
  //res.send(`<h1>This is Express!</h1>`);
  res.render('index');
});

app.get('/hello', (req, res) => {
  res.send(`<h1>Hi, JavaScript Developer!`);
});

app.listen(port, () => {
  console.log(`The app is running on localhost: ${port}`);
});