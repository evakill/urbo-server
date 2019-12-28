const express = require('express')
const router = express.Router()
const { User } = require('../models/index')

router.post('/add', (req, res) => {
  const { fname, lname, email, password } = req.body
  const newUser = new User({ fname, lname, email, password })
  newUser.save((err, resp) => {
    if (err) console.log('error saving user', err)
    else res.json(resp)
  })
})

module.exports = router
