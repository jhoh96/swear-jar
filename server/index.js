// server runs through this file
const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "pool",
});

app.get("/", (req, res) => {
  // This to test if server is working
  //   const sqlInsert =
  //     "INSERT INTO pooldatabase (userName, instanceWord, instanceCost) VALUES ('user_one', 'fuck', '5');";
  //   db.query(sqlInsert, (err, result) => {
  //     console.log(err)
  //     res.send("hello server is running");
  //   });
});

app.listen(3001, () => {
  console.log("server is running on port 3001");
});
