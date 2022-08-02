// server runs through this file
const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

/*
* info
*/

const DB_HOST = process.env.DB_HOST;
const DB_LOGIN = process.env.DB_LOGIN;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_DATABASE = process.env.DB_DATABASE;

const db = mysql.createConnection({
  host: DB_HOST,
  user: DB_LOGIN,
  password: DB_PASSWORD,
  database: DB_DATABASE,
});

//check db connection
db.connect((err) => {
  if(err) {
    console.log(err)
  }
  console.log('server successfully connected')
})

//cors
app.use(cors())

app.use(express.json())

//body parser 
app.use(bodyParser.urlencoded({extended: true}))

/**
 * 
 *  API STUFF HERE
 * 
 */

// Posting to database (INSERT)
app.post("/api/insert", (req, res)=> {

    const userName = req.body.userName;
    const instanceWord = req.body.instanceWord;
    const instanceCost = req.body.instanceCost;

    const sqlInsert = "INSERT INTO pool_instances (userName, instanceWord, instanceCost) VALUES (?,?,?)"
    db.query(sqlInsert, [userName, instanceWord, instanceCost], (err, result) => {
        console.log(err)
    })
})

// Getting all data from db (GET)
app.get('/api/get', (req, res) => {
  const sqlSelect = "SELECT * FROM pool_instances"
  db.query(sqlSelect, (err, result) => {
    if(err) {
      console.log(err)
    }
    res.send(result)
})
})



app.listen(3001, () => {
  console.log("server is running on port 3001");
});
