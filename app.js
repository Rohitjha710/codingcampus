const express = require('express');
const bodyParser = require("body-parser");
const app = express();

let mysql = require("mysql");
let sql = mysql.createConnection({
  host: "localhost",
  user: 'newuser',
  password: 'Rohit@1996',
  database: "codingcampus",
  multupleStatements: true
});
function sqlQuery(query, parameter = []) {
  return new Promise((resolve, reject) => {
    sql.query(query, parameter, function(err, result) {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
  });
}
 var sql1='insert into codingTable(name,mobile,email) values("rohit","7587457250","rohit@gmail.com");';
 sqlQuery(sql1).then(a=>{console.log("user added")})
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000);
console.log("server started on 3000");