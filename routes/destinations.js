const express = require('express')
const router = express.Router()
const { Destination } = require('../models/index')

router.get('/', (req, res) => {
  Destination.find({}, (err, resp) => {
    if (err) console.log('error getting destinations', err)
    else res.json(resp)
  })
})

router.post('/new', (req, res) => {
  const { name, lat, lng, desc, city, instr, img } = req.body
  const approved = false
  const newDest = new Destination({ approved, name, lat, lng, desc, city, instr, img })
  newDest.save((err, resp) => {
    if (err) console.log('error saving destination', err)
    else res.json(resp)
  })
})

module.exports = router
