const { urlencoded } = require('express');
const express = require('express')
const router = express.Router()

const MongoNames = require('../models/Names');
const MongoQuestion = require('../models/Question');



router.get('/', (req, res) => {
    db.Router.find()
    .then((router) => {
      res.render('router/index', { router })
    })
    .catch(err => {
      console.log(err) 
      res.render('error404')
    })
})

router.post('/', (req, res) => {
  console.log('WE SMACKED THE ROUTE!!!', req.body)
    MongoNames.create(req.body)
    .then((newNameCreated) => {
        res.json(newNameCreated)
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
  })

  router.get('/Name', (req, res) => {
    res.render('models/Name')
  })

  router.get('/result', (req, res) => {
    res.json('result')
  });
  
  router.get('/Question', (req, res) => {
    res.render('models/Question')
  })
  
  router.get('/quizs', (req, res) => {
    res.json('quiz', router)
  })

module.exports = router