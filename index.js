require('dotenv').config()
const express = require ('express')
const routes = require('./routes/routes')
const app = express()

//const port = 3000
app.use (express.static('public'))
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use('/', routes)

//app.listen(port, ()=> {
//    console.log (`App rodando na porta ${port}`)
app.listen(process.env.PORT, ()=> {
   console.log (`App rodando na porta ${process.env.PORT}`)
})

//       http://localhost:3000/