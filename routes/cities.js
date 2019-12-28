const express = require('express')
const router = express.Router()
const { City } = require('../models/index')

router.get('/', (req, res) => {
  City.find({}, (err, resp) => {
    if (err) console.log('error getting cities', err)
    else res.json(resp)
  })
})

router.post('/new', (req, res) => {
  const { name, lat, lng } = req.body
  const newCity = new City({ name, lat, lng })
  newCity.save((err, resp) => {
    if (err) console.log('error saving city', err)
    else res.json(resp)
  })
})

module.exports = router
