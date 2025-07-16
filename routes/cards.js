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
  const name = req.cookies.username;
  const parsedQuery = req._parsedUrl.query;
  const regex = /question|answer/;
  const templateData = {id, text, name};
  

  if (!side || !regex.test(parsedQuery)) {
    res.redirect(`/cards/${id}?side=question`);
  }  

  if (side === 'question') {
    templateData.sideToShow = 'answer';
    templateData.hint = hint;
    templateData.sideToShowDisplay = 'Answer';

    // templateData ---
    // {
    //   id: '2',
    //   text: "What is a common ...?",
    //   name: 'Hannah',
    //   sideToShow: 'answer',
    //   hint: 'It has the same abbreviation as "resolution"',
    //   sideToShowDisplay: 'Answer',
    //   _locals: [Object: null prototype] {}
    // }
    res.render('card', templateData);
  }
  
  if (side === 'answer') {
    templateData.sideToShow = 'question';
    templateData.sideToShowDisplay = 'Question';
    res.render('card', templateData);
  }
});

module.exports = router;