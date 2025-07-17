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
  // const parsedQuery = req._parsedUrl.query;
  const regex = /question|answer/;
  
  if (!side || /*!regex.test(side)*/!side.match(regex)) {
    return res.redirect(`/cards/${id}?side=question`);
  }

  const {hint} = cards[id];
  const text = cards[id][side];
  const name = req.cookies.username;
  const templateData = {id, text, name};

  if (side === 'question') {
    templateData.sideToShow = 'answer';
    templateData.hint = hint;
    templateData.sideToShowDisplay = 'question';
    res.render('card', templateData);
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
  }
  
  if (side === 'answer') {
    templateData.sideToShow = 'question';
    templateData.sideToShowDisplay = 'answer';
    res.render('card', templateData);
  }
});

module.exports = router;