const express = require('express');
const router = express.Router();

const {data} = require('../data/flashcardData.json');
const {cards} = data;


router.get('/', (req, res) => {
  const numberOfCards = cards.length;
  const flashcardId = Math.floor(Math.random() * numberOfCards);
  
  res.redirect(`/cards/${flashcardId}`);
});

router.get('/:id', (req, res) => {
  const {id} = req.params;
  const {side} = req.query;
  const {hint} = cards[id];
  const text = cards[id][side];
  const templateData = {id, text};
  const parsedQuery = req._parsedUrl.query;
  const regex = /question|answer/;

  if (!side || !regex.test(parsedQuery)) {
    res.redirect(`/cards/${id}?side=question`);
    console.dir(req)
  }  

  if (side === 'question') {
    templateData.sideToShow = 'answer';
    templateData.hint = hint;
    templateData.sideToShowDisplay = 'Answer';
    res.render('card', templateData);
  }
  
  if (side === 'answer') {
    templateData.sideToShow = 'question';
    templateData.sideToShowDisplay = 'Question';
    res.render('card', templateData);
  }
});

module.exports = router;