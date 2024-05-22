const express = require ('express')
const path = require('path')
const router = express.Router()

router.get('/pagina', (req, res) => {
    res.sendFile(path.resolve('./public/pagina.html'))
})
router.get('/', (req, res)=> {
    res.send("Olá futuros full stack")
})
router.get('/oi', (req, res)=> {
    res.send("Olá alunos")
})
// ultima Rota 404
router.use(function (req, res, next){
    //res.status(404).send("Erro404")
    res.status(404).sendFile(path.resolve('./public/404.html'))
})
module.exports = router