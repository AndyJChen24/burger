var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

router.get("/",(req,res)=>{
    burger.selectAll(data=>{
        var object ={
            burgers: data
        }
        console.log(data)
        res.render("index",object);
    })
})

router.post("/api/burger", (req,res)=>{
    burger.insertOne(req.body.name,result=>{
        res.json({id: result.insertId})
    })
})

router.put("/api/burger/:id", (req,res)=>{
    var id = req.params.id;

    burger.updateOne(id, result=>{
        if (result.affectedRows == 0){
            return res.status(400).end();
        } else{
            res.status(200).end();
        }
    })
})

module.exports = router;