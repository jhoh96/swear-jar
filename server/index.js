// server runs through this file
const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require('body-parser')
const cors = require('cors')

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "pool",
});

//cors
app.use(cors)

//body parser 
app.use(bodyParser.urlencoded({extended: true}))

// Routing for the API
app.post('/api/insert', (req, res)=> {

    const userName = req.body.userName;
    const instanceWord = req.body.instanceWord;
    const instanceCost = req.body.instanceCost;

    const sqlInsert = "INSERT INTO pool (userName, instanceWord, instanceCost) VALUES (?,?,?)"
    db.query(sqlInsert, [userName, instanceWord, instanceCost], (err, result) => {
        console.log(err)
    })
})



app.listen(3001, () => {
  console.log("server is running on port 3001");
});
