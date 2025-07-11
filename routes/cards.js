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

router.get('/', (req, res) => {
  const numberOfCards = cards.length;
  const flashcardId = Math.floor(Math.random() * numberOfCards);
  res.redirect(`/cards/${flashcardId}?side=question`);
});

router.get('/:id', (req, res) => {
  const {side} = req.query;
  const {id} = req.params;
  
  // const templateData = {text};
  // const templateData = {text, hint};

  if (!side) {
    res.redirect(`/cards/${id}?side=question`);
  }

  const text = cards[id][side];
  const {hint} = cards[id];
  const templateData = {id, text};

  if (side === 'question') {
    templateData.hint = hint;
    templateData.sideToShow = 'answer';
    templateData.sideToShowDisplay = 'Answer'
  } else if (side === 'answer') {
    templateData.sideToShow = 'question';
    templateData.sideToShowDisplay = 'Question';
  }
  
  res.render('card', templateData);  
});

module.exports = router;