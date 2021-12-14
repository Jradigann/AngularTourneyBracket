const express = require('express');
const app = express();
 
const tourneyRoute = express.Router();
let Tourney = require('../model/Tourney');
 
// Add Tourney
tourneyRoute.route('/add-tourney').post((req, res, next) => {
    Tourney.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
 
// Get all Tourney
tourneyRoute.route('/').get((req, res) => {
    Tourney.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
 
// Get Tourney
tourneyRoute.route('/read-tourney/:id').get((req, res) => {
    Tourney.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
 
 
// Update Tourney
tourneyRoute.route('/update-tourney/:id').put((req, res, next) => {
    Tourney.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Tourney updated successfully!')
    }
  })
})
 
// Delete Tourney
tourneyRoute.route('/delete-tourney/:id').delete((req, res, next) => {
    Tourney.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
 
module.exports = tourneyRoute;