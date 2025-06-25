const express = require('express');
const router = express.Router();
const {data} = require('../data/flashcardData.json');
//const data = require('../.../...').data;
const {cards} = data;
//const cards = data.cards;


// router.get('/', (req, res) => {
//   res.render('card', {
//     prompt: "Who is buried in Grant's tomb?",
//     //hint: "Think about whose tomb it is."
//     //colors
//   });
//   //res.locals.prompt = "Who is buried in Grant's tomb?";
//   res.render('card');
// });

// router.get('/:id', (req, res) => {
//   const {side} = req.query;
//   const {id} = req.params;
//   const text = cards[id][side];
//   const {hint} = cards[id];
//   const templateData = {text, hint};

//   res.render('card', {
//     prompt: cards[req.params.id].question,
//     hint: cards[req.params.id].hint
//   });
// });

router.get('/:id', (req, res) => {
  const {side} = req.query;
  const {id} = req.params;
  const text = cards[id][side];
  const {hint} = cards[id];
  const templateData = {text};
  // const templateData = {text, hint};

  if (side === 'question') {
    templateData.hint = hint;
  }
  
  res.render('card', templateData);  
});

module.exports = router;