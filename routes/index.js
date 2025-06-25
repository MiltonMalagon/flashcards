const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  //res.send(`<h1>This is Express!</h1>`, {"name": "Eric"});
  const name = req.cookies.username;
  if (name) {
    res.render('index', /*pug var name*/{/*name: name*/ name});
  } else {
    res.redirect('/hello');
  }  
});

router.get('/cards', (req, res) => {
  res.render('card', {
    prompt: "Who is buried in Grant's tomb?",
    //hint: "Think about whose tomb it is."
    //colors
  });
  //res.locals.prompt = "Who is buried in Grant's tomb?";
  res.render('card');
});

router.get('/sandbox', (req, res) => {
  res.render('sandbox', {
    firstNames, lastNames
  });
});

router.get('/hello', (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.redirect('/');
  } else {
    res.render('hello');
  }
  // res.render('hello');
});

router.post('/hello', (req, res) => {
  res.cookie('username', req.body.username);
  // console.dir(req.body);
  // res.render('hello', {name: req.body.username});
  res.redirect('/');
  // res.json(req.body);
  // const cookie = res.cookie('username', req.body.username);
  // if (cookie) {
  //   res.redirect('/');
  // } else {
  //   res.render('/hello');
  // }
});

router.post('/goodbye', (req, res) => {
  res.clearCookie('username')
  res.redirect('/hello');
});

module.exports = router;