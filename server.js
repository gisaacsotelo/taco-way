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

  //   db.getAllMeats().then((allMeats) => {
  //     db.getAllVeggies().then((allVeggies) => {
  //       db.getAllSauces().then((allSauces) => {
  //         const viewTables = {
  //           meats: allMeats,
  //           veggies: allVeggies,
  //           sauces: allSauces,
  //         }

  //         dataView.customerName = customerName
  //         dataView.data = viewTables
  //         console.log(`DATA VIEW :`, dataView)
  //         res.render('order', dataView)
  //       }) // end getAllSauces
  //     }) // end getAllVeggies
  //   }) // end getAllMeats
  // })
  let meats = {}
  let veg = {}
  db.getAllMeats()
    .then((allMeats) => {
      meats = allMeats
      return db.getAllVeggies()
    }) // end getAllMeats
    .then((allVeggies) => {
      veg = allVeggies
      return db.getAllSauces()
    }) // end getAllVeggies
    .then((allSauces) => {
      const viewTables = {
        meats: meats,
        veggies: veg,
        sauces: allSauces,
      }

      dataView.customerName = customerName
      dataView.data = viewTables
      console.log(`DATA VIEW :`, dataView)
      res.render('order', dataView)
    }) // end getAllSauces
    .catch((err) => {
      console.log(err)
      res.send(`We got an error Homs`)
    })
})

// POST /order/:name
server.post('/orders/:name', (req, res) => {
  const meatIdSelected = req.body.meat
  const vegIdSelected = req.body.veg
  const sauceIdSelected = req.body.sauce
  const selection = {
    meat_id: meatIdSelected,
    veg_id: vegIdSelected,
    sauce_id: sauceIdSelected,
  }
  console.log(selection)
  const result = selection
console.log(result)
let aMeat = {}
let aVeg = {}

db.getMeatById(Number(result.meat_id))
    .then((meat) => {
      aMeat = meat
      return db.getVeggiesById(Number(result.veg_id))
    }) // end getAllMeats
    .then((veg) => {
      aVeg = veg
      return db.getSaucesById(Number(result.sauce_id))
    }) // end getAllVeggies
    .then((sauce) => {
      const selectIngred = {
        meat: aMeat,
        veg: aVeg,
        sauce: sauce,
      }
      console.log(selectIngred)
      res.render('result', selectIngred)
    }) // end getAllSauces
    .catch((err) => {
      console.log(err)
      res.send(`We got an error Homs`)
    })
})
// {meat_id: meat_id, veg_id: veg_id, sauce_id: sauce_id}
// GET / Result page
server.get('/result/', (req, res) => {

})
module.exports = server
