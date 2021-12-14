const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
let Tourney = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  p1: {
    type: String
  },
  p2: {
    type: String
  },
  p3: {
    type: String
  },
  p4: {
    type: String
  },
  p5: {
    type: String
  },
  p6: {
    type: String
  },
  p7: {
    type: String
  },
  p8: {
    type: String
  },
  r1w1: {
    type: String
  },
  r1w2: {
    type: String
  },
  r1w3: {
    type: String
  },
  r1w4: {
    type: String
  },
  r2w1: {
    type: String
  },
  r2w2: {
    type: String
  },
  winner: {
    type: String
  }
}, {
  collection: 'tourneys'
})
 
module.exports = mongoose.model('Tourney', Tourney)