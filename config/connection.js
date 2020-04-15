const mysql = require('mysql')

var connection = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"Jc242242+",
    database:"burgers_db"
})

connection.connect((err)=>{
    if(err) throw err;
    console.log("Connect as ID "+ connection.threadId);
})

module.exports = connection;