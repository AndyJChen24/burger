const connection = require('./connection.js');

const orm = {
    selectAll: function(cb){
        const query = "SELECT * FROM burgers";
        connection.query(query, (err,res)=>{
            if (err) throw err;
            cb(res)
        })
    },
    insertOne: function(value,cb){
        const query = "INSERT INTO burgers VALUES(?)";
        connection.query(query,[value], (err,res)=>{
            if (err) throw err;
            cb(res)
        })
    },
    updateOne: function(id, cb){
        const query = "UPDATE burgers SET devoured = true WHERE id =?";
        connection.query(query,[id], (err,res)=>{
            if (err) throw err;
            cb(res)
        })
    }


}
module.exports = orm;