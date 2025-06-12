const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`The app is running on localhost: ${port}`);
});
app.get('/', (req, res) => {
  res.send(`<h1>This is Express!</h1>`);
});
app.get('/hello', (req, res) => {
  res.send(`<h1>Hi, JavaScript Developer!`);
});