var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var Workout = require('../models/Workout')

/* GET home page */
router.get('/', function (req, res, next) {
  Workout.find(function (err, lifts) {
    if (err) return next(err)
    res.json(lifts)
  })
})

/* GET single workout by ID */
router.get('/:id', function (req, res, next) {
  Workout.findById(req.params.id, function (err, post) {
    if (err) return next(err)
    res.json(post)
  })
})

/* SAVE workout */
router.post('/', function (req, res, next) {
  Workout.create(req.body, function (err, post) {
    if (err) return next(err)
    res.json(post)
  })
})

/* UPDATE workout */
router.put('/:id', function (req, res, next) {
  console.log(req.body)
  Workout.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err)
    res.json(post)
  })
})

/* DELETE workout */
router.delete('/:id', function (req, res, next) {
  Workout.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err)
    res.json(post)
  })
})

module.exports = router
