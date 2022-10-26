const express = require('express')
const app = express()
const porta = process.env.PORT || 4000
app.use(express.json())
app.set('view engine','ejs')
app.set('view engine','html')



app.listen(porta, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})

module.exports = {app,porta}