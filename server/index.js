const express = require('express')
const app = express()
const port = 3000
const controllers = require('../db/controllers/index.js')
const db = require('../db/connection.js')
const corgoDb = require('../corgos.js')

console.log(corgoDb);

app.use(express.urlencoded())
app.use(express.json())

app.get('/corgos', (req, res) => {
    console.log('whale whale whale wUddo wehaveHere')
    console.log('these are THE PARAMS BABY', req.query)
    let data = corgoDb
    res.send(data)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/corgo', controllers)

app.listen(port, () => {
    console.log(`Cruddy app is listening at http://localhost:${port}`)
})

