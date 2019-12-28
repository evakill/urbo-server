const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DestinationSchema = new Schema({
  approved: {
    type: Boolean,
    required: true
  },
  lat: {
    type: Number,
    required: true
  },
  lng: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  instr: {
    type: String,
    required: true
  },
  city: {
    type: Schema.Types.ObjectId,
    ref: 'City'
  },
  img: {
    type: String
  },
  foundBy: {
    type: [Schema.Types.ObjectId],
    ref: 'User'
  },
})

module.exports = mongoose.model('Destination', DestinationSchema)
