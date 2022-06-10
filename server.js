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

//POST /Home page

server.post('/', (req, res) => {
  const customer = req.body.name
  res.redirect(`/orders/${customer}`)
})

// GET /order/:name
server.get('/orders/:name', (req, res) => {
  const customerName = req.params.name
  const dataView = {}

  db.getAllMeats().then((allMeats) => {
    db.getAllVeggies().then((allVeggies) => {
      db.getAllSauces().then((allSauces) => {
        const viewTables = {
          meats: allMeats,
          veggies: allVeggies,
          sauces: allSauces,
        }

        dataView.customerName = customerName
        dataView.data = viewTables
        // console.log(dataView)
        res.render('order', dataView)
      }) // end getAllSauces
    }) // end getAllVeggies
  }) // end getAllMeats
})

// POST /order/:name
server.post('/orders/:name', (req, res) => {
  const { meat, veg, sauce } = req.body
  console.log(req.body)
  console.log(meat)
  res.render('result', req.body)
})

// GET / Result page

module.exports = server
