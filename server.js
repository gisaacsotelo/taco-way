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

// GET /Home page
server.get('/', (req, res) => {

  res.render('home')
})

// GET /Order page
// server.get('/order', (req, res) => {
//   return db.getAllMeats().then(allMeats) => {
    
//   }
// })

// GET / Result page


module.exports = server
