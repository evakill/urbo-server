const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  homeCity: {
    type: Schema.Types.ObjectId,
    ref: 'City'
  },
  visitedDestinations: {
    type: [Schema.Types.ObjectId],
    ref: 'Destination'
  }
})

module.exports = mongoose.model('User', UserSchema)
