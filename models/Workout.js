var mongoose = require('mongoose')

var workoutSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Workout name is required'],
    unique: true
  },
  sets: {
    type: Number,
    min: [1, 'Should be doing at least 1 rep.. come on now!'],
    max: [40, 'Try to reduce the number of sets and increase your lifting weight!']
  },
  reps: {
    type: Number,
    min: [1, 'Really?'],
    max: [100, 'Okay, we get it.']
  },
  weight: {
    type: Number,
    max: [1000, '....']
  },
  personal_record: {
    type: Number
  },
  updated_date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Workout', workoutSchema)
