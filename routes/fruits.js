const express = require('express')

const db = require('../db/fruits')

const router = express.Router()

// GET /fruits
router.get('/', (req, res) => {
  return db.getAllFruits().then((fruits) => {
    const viewData = { fruits }
    res.render('fruits', viewData)
  })
})

module.exports = router
