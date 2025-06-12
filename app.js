const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`The app is running on localhost: ${port}`);
});

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  //res.send(`<h1>This is Express!</h1>`);
  res.render('index');
});

app.get('/cards', (req, res) => {
  res.render('card', {
    prompt: "Who is buried in Grant's tomb?",
    hint: "Think about whose tomb it is."
  });
  //res.locals.prompt = "Who is buried in Grant's tomb?";
  res.render('card');
});