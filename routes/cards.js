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

router.get('/', (req, res) => {
  res.render('card', {
    prompt: cards[0].question,
    hint: cards[0].hint
  });
});

module.exports = router;