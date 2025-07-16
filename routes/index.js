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
  console.dir(res);
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