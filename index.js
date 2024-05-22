const express = require ('express')
const routes = require('./routes/routes')
const app = express()

const port = 3000
app.use (express.static('public'))

app.use('/', routes)

app.listen(port, ()=> {
    console.log (`App rodando na porta ${port}`)
})

//       http://localhost:3000/