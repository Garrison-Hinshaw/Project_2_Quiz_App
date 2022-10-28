const { urlencoded } = require('express');
const express = require('express')
const router = express.Router()

const MongoNames = require('../models/Names');
const MongoQuestion = require('../models/Question');



router.get('/', (req, res) => {
    db.Router.find()
    .then((router) => {
      res.json('router/index', { router })
    })
    .catch(err => {
      console.log(err) 
      res.json('error404')
    })
})

router.post('/', (req, res) => {
    db.Router.create(req.body)
    .then(() => {
        res.redirect('/router')
    })
    .catch(err => {
        console.log('err', err)
        res.json('error404')
    })
  })

  router.get('/Name', (req, res) => {
    res.json('models/Name')
  })

  router.get('/result', (req, res) => {
    res.json('result')
  });
  
  router.get('/Question', (req, res) => {
    res.json('models/Question')
  })
  
  router.get('/quizs', (req, res) => {
    res.json('quiz', router)
  })

module.exports = router