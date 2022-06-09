const path = require('path')
const express = require('express')
const hbs = require('express-handlebars')
const db = require('../db')



// ------ SERVER SETUP ----------------

const server = express()

const publicFolder = path.join(__dirname, 'public')
server.use(express.static(publicFolder))
server.use(express.urlencoded({ extended: false }))

server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')

// ------ ROUTERS + ROUTES ------------

// GET /ingridients
server.get('/', (req, res) => {
  // return db.getAllFruits().then((fruits) => {
  //   const viewData = { fruits }
  //   res.render('fruits', viewData)
  // })
})

module.exports = server
