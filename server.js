const path = require('path')
const express = require('express')
const hbs = require('express-handlebars')
const db = require('./db')



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
server.get('/order', (req, res) => {
  db.getAllMeats().then((allMeats) => {
    db.getAllVeggies().then((allVeggies) => {
      db.getAllSauces().then((allSauces) => {
        const viewTables = {meats: allMeats, veggies: allVeggies, sauces: allSauces}
        console.log(viewTables)
        res.render('orders', viewTables)
      }) 
    })
  })
})

// GET / Result page


module.exports = server
