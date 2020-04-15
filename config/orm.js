const connection = require('./connection');

const orm = {
    selectAll: function(){
        const query = "SELECT * FROM burgers";
        connection.query(query, (err,res)=>{
            if (err) throw err;
            console.log(res)
        })
    },
    insertOne: function(value){
        const query = "INSERT INTO burgers VALUES(?)";
        connection.query(query,[value], (err,res)=>{
            if (err) throw err;
            console.log(res)
        })
    },
    updateOne: function(burgerName){
        const query = "UPDATE burgers SET devoured = true WHERE burger_name =??";
        connection.query(query,[burgerName], (err,res)=>{
            if (err) throw err;
            console.log(res)
        })
    }


}
module.exports = orm;