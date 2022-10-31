const express = require('express')
const app = express()
app.set('view engine','ejs')
app.set('view engine','html')

app.use(express.urlencoded({ extended: false }))
app.use(express.static('./'))

const porta = process.env.PORT ||  4040

app.listen(porta, () => {
    console.log(`Servidor escutando em http://localhost:${porta}`)
})

module.exports = { app, porta }
