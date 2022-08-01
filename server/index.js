// server runs through this file
const express = require('express')
const app = express()



app.get('/', (req, res) => {
    res.send('hello server is running')
})

app.listen(3001, () => {
    console.log('server is running on port 3001')
})